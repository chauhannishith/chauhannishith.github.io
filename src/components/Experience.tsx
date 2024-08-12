import { Accordion, AccordionSummary, Typography, AccordionDetails, Grid } from '@mui/material'
import { Section } from './Section'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Experience = () => {
  return (
    <Section id="experience" dark>
      <Grid container item xs={12} rowGap={2}>
        <Grid item xs={12}>
          <Typography variant='h3' color='secondary'>
          Experience
          </Typography>
        </Grid>
        <Stably/>
        <Numie/>
        <Groceristar/>
      </Grid>
    </Section>
  )
}

const Stably = () => {
  return (
    <Accordion defaultExpanded sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>Software developer at Stably Inc.</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut saepe adipisci tempora voluptatem similique officiis, aliquid quod natus harum laudantium deleniti fugit sint eveniet illo error ea, ullam omnis earum! Eaque nam mollitia unde et ex laborum optio quidem voluptatum? Ut amet reiciendis rerum libero, accusantium ea quae aspernatur voluptatem? Quia officiis error rerum sint cupiditate! Reprehenderit libero deleniti consequatur minus mollitia dicta qui inventore tempora accusantium atque aut, labore eveniet, fugiat voluptatem quo repellendus sequi aperiam. Aliquam voluptatibus amet tenetur aliquid molestias culpa et incidunt quis. Commodi dolorum rem consequuntur accusamus veritatis laboriosam totam maxime vel consectetur ducimus ut ipsa animi enim, dignissimos similique quasi at necessitatibus qui, dolore mollitia numquam quos vero dicta! Nesciunt at fuga iusto enim eveniet est voluptatibus neque, quos illo repellendus magni excepturi nulla maiores deserunt dolor. Vel ex nisi dignissimos voluptates corporis sunt tempore atque quo? Itaque non, ratione excepturi quam similique ab pariatur voluptatem facere esse, ad magnam distinctio. Sed atque natus sit autem explicabo totam, dolorem neque quidem. Corporis eos vel aliquam officia, consequatur nobis nesciunt unde consequuntur, fugit impedit numquam iure, autem mollitia facere! Ex, delectus corrupti? Numquam esse magnam ut, vitae dolorem explicabo possimus repudiandae nobis architecto, eum assumenda?
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const Numie = () => {
  return (
    <Accordion sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography>Full Stack Developer at Numie</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

const Groceristar = () => {
  return (
    <Accordion sx={{
      width: {
        sm: '100%',
        md: '80%',
      }
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color={'secondary'} />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography>Intern at Groceristar</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend
          isse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}