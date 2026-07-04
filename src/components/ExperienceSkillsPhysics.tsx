import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Matter from 'matter-js'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

const WALL_THICKNESS = 72
const H_INSET = 12
const GAP_X = 8
const GAP_Y = 8
/** Row height for each grid cell (chip fits inside). */
const CELL_H = 34
const CELL_PAD = 3
const TOP_INSET = 14
const BOTTOM_FLOOR_ZONE = 36
const MIN_CELL_W = 54
/** Keeps pills compact — chips never stretch to full cell width on sparse rows. */
const MAX_CHIP_BODY_W = 168
const MIN_CHIP_BODY_W = 52

function estimateChipBodyWidth(label: string): number {
  const padX = 18
  const charW = 7.35
  return Math.min(MAX_CHIP_BODY_W, Math.max(MIN_CHIP_BODY_W, Math.round(label.length * charW + padX * 2)))
}

type ChipBinding = {
  body: Matter.Body
  el: HTMLDivElement
  halfW: number
  halfH: number
}

/** Pick columns ~√n, then shrink column count until cells stay readable at this width. */
function gridDims(skillCount: number, width: number): { cols: number; rows: number } {
  const n = skillCount
  if (n <= 0) return { cols: 1, rows: 1 }
  let cols = Math.max(1, Math.round(Math.sqrt(n)))
  cols = Math.min(n, cols)
  while (cols > 1) {
    const inner = width - 2 * H_INSET - (cols - 1) * GAP_X
    const cellW = inner / cols
    if (cellW >= MIN_CELL_W) break
    cols -= 1
  }
  const rows = Math.ceil(n / cols)
  return { cols, rows }
}

function dropHeadroom(rows: number): number {
  return Math.min(130, Math.max(36, rows * 10 + 20))
}

function computeGridPlayHeight(rows: number): number {
  const r = Math.max(1, rows)
  const stackH = r * CELL_H + (r - 1) * GAP_Y
  return Math.round(TOP_INSET + dropHeadroom(r) + stackH + BOTTOM_FLOOR_ZONE)
}

/** Upper bound before measure (single-column layout = tallest). */
function fallbackPlayHeight(skillCount: number): number {
  const n = Math.max(1, skillCount)
  return computeGridPlayHeight(n)
}

function StaticExperienceSkills({ entryId, skills }: { entryId: string; skills: string[] }) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${GAP_Y}px ${GAP_X}px`,
        listStyle: 'none',
        p: 0,
        m: 0,
        width: '100%',
        justifyContent: 'flex-start',
      }}
    >
      {skills.map((skill, index) => (
        <Box
          component="li"
          key={`${entryId}-s-${index}-${skill}`}
          sx={{
            flex: '0 1 auto',
            maxWidth: MAX_CHIP_BODY_W,
            fontSize: '0.8rem',
            px: '0.55rem',
            py: '0.35rem',
            borderRadius: '10px',
            boxSizing: 'border-box',
            fontWeight: 500,
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            backgroundColor: index % 2 === 0 ? 'rgba(99, 102, 241, 0.12)' : 'rgba(139, 92, 246, 0.09)',
            border: '1px solid rgba(99, 102, 241, 0.26)',
            color: 'rgba(226, 232, 240, 0.92)',
          }}
        >
          {skill}
        </Box>
      ))}
    </Box>
  )
}

function createSyntheticMouse(root: HTMLElement): Matter.Mouse {
  const stub = {
    element: root,
    absolute: { x: 0, y: 0 },
    position: { x: 0, y: 0 },
    mousedownPosition: { x: 0, y: 0 },
    mouseupPosition: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    scale: { x: 1, y: 1 },
    wheelDelta: 0,
    button: -1,
    pixelRatio: 1,
    sourceEvents: {
      mousemove: null as MouseEvent | TouchEvent | null,
      mousedown: null as MouseEvent | TouchEvent | null,
      mouseup: null as MouseEvent | TouchEvent | null,
      mousewheel: null as MouseEvent | TouchEvent | null,
    },
  }
  return stub as unknown as Matter.Mouse
}

function initPhysics(
  root: HTMLElement,
  layer: HTMLElement,
  skills: string[],
  width: number,
  playHeight: number,
): () => void {
  const localAbort = new AbortController()
  const { signal } = localAbort

  const engine = Matter.Engine.create({ enableSleeping: true })
  engine.gravity.y = 1
  engine.gravity.scale = 0.00165

  const world = engine.world
  const Bodies = Matter.Bodies

  const floorY = playHeight + WALL_THICKNESS / 2 - 10
  const floor = Bodies.rectangle(width / 2, floorY, width + WALL_THICKNESS * 3, WALL_THICKNESS, {
    isStatic: true,
    friction: 0.92,
    frictionStatic: 1,
    render: { visible: false },
  })
  const leftWall = Bodies.rectangle(-WALL_THICKNESS / 2, playHeight / 2, WALL_THICKNESS, playHeight + 160, {
    isStatic: true,
    friction: 0,
    render: { visible: false },
  })
  const rightWall = Bodies.rectangle(width + WALL_THICKNESS / 2, playHeight / 2, WALL_THICKNESS, playHeight + 160, {
    isStatic: true,
    friction: 0,
    render: { visible: false },
  })
  Matter.Composite.add(world, [floor, leftWall, rightWall])

  const n = skills.length
  const { cols, rows } = gridDims(n, width)
  const inner = width - 2 * H_INSET - (cols - 1) * GAP_X
  const cellW = inner / cols
  const chipH = Math.max(28, CELL_H - CELL_PAD * 2)
  const halfH = chipH / 2

  const pitchY = CELL_H + GAP_Y
  const pitchX = cellW + GAP_X
  const floorSlabTop = playHeight - BOTTOM_FLOOR_ZONE
  const bottomCellCenterY = floorSlabTop - CELL_H / 2
  const drop = dropHeadroom(rows)

  layer.innerHTML = ''
  const bindings: ChipBinding[] = []

  skills.forEach((skill, index) => {
    const rowFromTop = Math.floor(index / cols)
    const col = index % cols
    const cellBudget = Math.max(MIN_CHIP_BODY_W, cellW - CELL_PAD * 2)
    const chipW = Math.min(cellBudget, estimateChipBodyWidth(skill))
    const halfW = chipW / 2
    const cx = H_INSET + col * pitchX + cellW / 2
    const cyRest = bottomCellCenterY - (rows - 1 - rowFromTop) * pitchY

    const ySpawn = cyRest - drop

    const body = Bodies.rectangle(cx, ySpawn, chipW, chipH, {
      chamfer: { radius: 9 },
      restitution: 0.26,
      friction: 0.68,
      frictionAir: 0.022,
      density: 0.0026,
      label: skill,
    })

    const el = document.createElement('div')
    el.textContent = skill
    el.style.position = 'absolute'
    el.style.left = '0'
    el.style.top = '0'
    el.style.width = `${chipW}px`
    el.style.height = `${chipH}px`
    el.style.display = 'flex'
    el.style.alignItems = 'center'
    el.style.justifyContent = 'center'
    el.style.paddingLeft = '8px'
    el.style.paddingRight = '8px'
    el.style.fontSize = '0.8rem'
    el.style.fontWeight = '500'
    el.style.borderRadius = '10px'
    el.style.pointerEvents = 'none'
    el.style.userSelect = 'none'
    el.style.boxSizing = 'border-box'
    el.style.overflow = 'hidden'
    el.style.textOverflow = 'ellipsis'
    el.style.whiteSpace = 'nowrap'
    el.style.backgroundColor = index % 2 === 0 ? 'rgba(99, 102, 241, 0.14)' : 'rgba(139, 92, 246, 0.11)'
    el.style.border = '1px solid rgba(99, 102, 241, 0.3)'
    el.style.color = 'rgba(226, 232, 240, 0.92)'
    layer.appendChild(el)
    Matter.Composite.add(world, body)
    bindings.push({ body, el, halfW, halfH })
  })

  const mouse = createSyntheticMouse(root)

  const clientToLocal = (clientX: number, clientY: number) => {
    const rect = root.getBoundingClientRect()
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const syncPointer = (e: Pick<PointerEvent, 'clientX' | 'clientY'>) => {
    const p = clientToLocal(e.clientX, e.clientY)
    mouse.position.x = p.x
    mouse.position.y = p.y
    mouse.absolute.x = p.x
    mouse.absolute.y = p.y
  }

  const onWindowMove = (e: PointerEvent) => {
    if (mouse.button !== 0) return
    syncPointer(e)
  }

  const onDown = (e: PointerEvent) => {
    if (e.pointerType === 'touch') return
    mouse.button = 0
    syncPointer(e)
    try {
      root.setPointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
  }

  const onUp = () => {
    mouse.button = -1
  }

  window.addEventListener('pointermove', onWindowMove, { signal, passive: true })
  window.addEventListener('pointerup', onUp, { signal })
  window.addEventListener('pointercancel', onUp, { signal })
  root.addEventListener('pointerdown', onDown, { signal })

  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.24,
      damping: 0.09,
      render: { visible: false },
    },
  })
  Matter.Composite.add(world, mouseConstraint)

  const syncDom = () => {
    for (const { body, el, halfW, halfH } of bindings) {
      const x = body.position.x - halfW
      const y = body.position.y - halfH
      el.style.transform = `translate(${x}px, ${y}px) rotate(${body.angle}rad)`
    }
  }

  Matter.Events.on(engine, 'afterUpdate', syncDom)

  const runner = Matter.Runner.create()
  Matter.Runner.run(runner, engine)
  syncDom()

  return () => {
    localAbort.abort()
    Matter.Runner.stop(runner)
    Matter.Events.off(engine, 'afterUpdate', syncDom)
    Matter.Events.off(engine, 'beforeUpdate')
    Matter.Composite.clear(engine.world, false)
    layer.innerHTML = ''
  }
}

export function ExperienceSkillsPhysics({ entryId, skills }: { entryId: string; skills: string[] }) {
  const { reduceMotion } = useReducedMotionPreference()
  const isDesktop = useMediaQuery('(pointer: fine) and (hover: hover)')
  const rootRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)

  const [arena, setArena] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (reduceMotion || !isDesktop) return

    const root = rootRef.current
    if (!root) return

    const measure = () => {
      const w = Math.floor(root.clientWidth)
      if (w < 48) return
      const { rows } = gridDims(skills.length, w)
      const h = computeGridPlayHeight(rows)
      setArena((prev) => (prev?.width === w && prev?.height === h ? prev : { width: w, height: h }))
    }

    measure()

    if (typeof ResizeObserver === 'undefined') {
      return
    }

    const ro = new ResizeObserver(() => measure())
    ro.observe(root)
    return () => ro.disconnect()
  }, [isDesktop, reduceMotion, skills])

  useEffect(() => {
    if (reduceMotion || !isDesktop || !arena) return

    const root = rootRef.current
    const layer = layerRef.current
    if (!root || !layer) return

    const teardown = initPhysics(root, layer, skills, arena.width, arena.height)
    return () => teardown()
  }, [arena, entryId, isDesktop, reduceMotion, skills])

  const fallbackH = fallbackPlayHeight(skills.length)

  if (reduceMotion || !isDesktop) {
    return <StaticExperienceSkills entryId={entryId} skills={skills} />
  }

  return (
    <Box sx={{ mt: 0.5 }}>
      <Typography variant="caption" component="p" sx={{ color: 'text.muted', mb: 1 }}>
        Skills — chips settle in a grid (drag with a mouse on desktop; scroll works on touch)
      </Typography>
      <Box
        ref={rootRef}
        aria-label="Interactive skill chips in a grid"
        sx={{
          position: 'relative',
          width: '100%',
          height: arena?.height ?? fallbackH,
          overflow: 'hidden',
          borderRadius: 2,
          border: '1px solid rgba(255, 255, 255, 0.07)',
          background:
            'linear-gradient(180deg, rgba(99, 102, 241, 0.055) 0%, rgba(22, 24, 32, 0.5) 52%, rgba(14, 16, 22, 0.44) 100%)',
          touchAction: 'pan-y',
          cursor: 'grab',
          '&:active': { cursor: 'grabbing' },
        }}
      >
        <Box
          ref={layerRef}
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  )
}
