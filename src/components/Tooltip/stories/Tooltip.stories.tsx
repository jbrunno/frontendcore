import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip, TooltipProps } from '../Tooltip';
import { Button } from '../../Button/Button';
import { Box } from '../../Box/Box';
import { Grid } from '../../Grid/Grid';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (props: TooltipProps) => (
  <Tooltip {...props}>
    <Button>{props.title}</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};

export const Color = Template.bind({});
Color.args = {
  title: 'Color',
  color: 'secondary',
};

export const Position: ComponentStory<typeof Tooltip> = () => (
  <Box sx={{ width: 500 }}>
    <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Add" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Tooltip title="Add" placement="left-start">
          <Button>left-start</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="left">
          <Button>left</Button>
        </Tooltip>
        <br />
        <Tooltip title="Add" placement="left-end">
          <Button>left-end</Button>
        </Tooltip>
      </Grid>
      <Grid item container xs={6} alignItems="flex-end" direction="column">
        <Grid item>
          <Tooltip title="Add" placement="right-start">
            <Button>right-start</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="right">
            <Button>right</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Add" placement="right-end">
            <Button>right-end</Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Add" placement="bottom-start">
          <Button>bottom-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom">
          <Button>bottom</Button>
        </Tooltip>
        <Tooltip title="Add" placement="bottom-end">
          <Button>bottom-end</Button>
        </Tooltip>
      </Grid>
    </Grid>
  </Box>
);
