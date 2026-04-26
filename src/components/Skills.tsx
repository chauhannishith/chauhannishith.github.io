import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { PageSection } from './PageSection'
import { skillGroups, skillIconUrl, type SkillItem } from '../data/skills'
import { ref } from '../theme/tokens'

const SkillCell = ({ item }: { item: SkillItem }) => {
  const [failed, setFailed] = useState(false)
  const url = skillIconUrl(item)
  const initials = item.name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        minWidth: 0,
        width: '100%',
        '&:hover .skill-icon-shell': {
          borderColor: 'rgba(99, 102, 241, 0.5)',
          boxShadow: '0 0 15px -3px rgba(99, 102, 241, 0.3)',
        },
        '&:hover .skill-label': { color: ref.zinc300 },
      }}
    >
      <Box
        className="skill-icon-shell"
        sx={{
          width: 48,
          height: 48,
          position: 'relative',
          /* Rounded rectangle (reference-style icon frame) */
          borderRadius: '12px',
          p: 0.75,
          bgcolor: 'rgba(39, 39, 42, 0.5)',
          border: '1px solid rgba(63, 63, 70, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {url && !failed ? (
          <Box
            component="img"
            src={url}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: 'primary.main' }}>{initials}</Typography>
        )}
      </Box>
      <Typography
        className="skill-label"
        sx={{
          fontSize: '10px',
          textAlign: 'center',
          fontWeight: 600,
          lineHeight: 1.25,
          color: 'text.muted',
          maxWidth: 72,
          width: '100%',
          transition: 'color 0.2s ease',
        }}
      >
        {item.name}
      </Typography>
    </Box>
  )
}

const CategoryCard = ({ title, items }: { title: string; items: readonly SkillItem[] }) => (
  <Box
    sx={{
      bgcolor: ref.cardBg,
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: 3,
      p: { xs: 3, md: 4 },
      backdropFilter: 'blur(8px)',
      transition: 'border-color 0.25s ease',
      '&:hover': { borderColor: 'rgba(99, 102, 241, 0.3)' },
    }}
  >
    <Box
      component="h3"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        m: 0,
        mb: 4,
        pb: 0.5,
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 4,
          borderRadius: 9999,
          background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
          flexShrink: 0,
        }}
      />
      <Typography component="span" variant="h6" sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1.15rem' }}>
        {title}
      </Typography>
    </Box>
    {/* reference: grid grid-cols-3 — use native CSS grid (more reliable than MUI Grid v5 item sizing) */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        columnGap: 2,
        rowGap: 2.5,
        width: '100%',
        justifyItems: 'center',
        alignItems: 'start',
      }}
    >
      {items.map((item) => (
        <SkillCell key={`${title}-${item.name}`} item={item} />
      ))}
    </Box>
  </Box>
)

export const Skills = () => {
  return (
    <PageSection id="skills" title="Skills" titleAlign="center">
      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', mb: { xs: 3, md: 4 }, maxWidth: 560, mx: 'auto', textAlign: 'center', lineHeight: 1.7 }}
      >
        Tools and technologies I use across the stack. Icons use the same Devicon set as the reference portfolio.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
          gap: 3,
          width: '100%',
        }}
      >
        {skillGroups.map((g) => (
          <CategoryCard key={g.id} title={g.title} items={g.items} />
        ))}
      </Box>
    </PageSection>
  )
}
