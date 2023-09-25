import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from '../Accordion';
import Typography from '../../Typography/Typography';
import Button from '../../Button/Button';
import Box from '../../Box/Box';
import AccordionSummary from '../../AccordionSummary/AccordionSummary';
import AccordionDetails from '../../AccordionDetails/AccordionDetails';
import AccordionActions from '../../AccordionActions/AccordionActions';

export default {
  id: 'accordion',
  title: 'Surfaces/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Default = (props: ComponentStory<typeof Accordion>) => {
  return (
    <Box p={2}>
      <Accordion {...props}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion Default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion Action</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button>Action</Button>
        </AccordionActions>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};
