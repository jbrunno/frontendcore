import type { ComponentMeta } from '@storybook/react';
import { Grid } from '../Grid';
import { Box } from '../../Box/Box';
import { Paper } from '../../Paper/Paper';

export default {
  id: 'grid',
  title: 'Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export function Default() {
  return (
    <Grid container spacing={2} xs={12}>
      <Grid item xs={12}>
        <Paper>
          <Box p={2}>12</Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Box p={2}>6</Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Box p={2}>6</Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Box p={2}>3</Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Box p={2}>3</Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Box p={2}>3</Box>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          <Box p={2}>3</Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
