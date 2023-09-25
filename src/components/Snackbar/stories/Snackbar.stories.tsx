import { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Snackbar } from '../Snackbar';
import Slide from '../../Slide/Slide';
import Button from '../../Button/Button';
import Grow from '../../Grow/Grow';
import Fade from '../../Fade/Fade';
import Alert from '../../Alert/Alert';

export default {
  id: 'snackbar',
  title: 'Feedback/Snackbar',
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

const CustomizedTemplate: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args}>
    <div>
      <Alert
        elevation={6}
        variant="filled"
        severity="success"
        sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        This is a success message!
      </Alert>
    </div>
  </Snackbar>
);

const Action = (
  <Button color="secondary" size="small">
    Action
  </Button>
);

const defaultArgs = {
  open: true,
  message: 'Teste teste',
  autoHideDuration: 6000,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  title: 'Default',
  anchorOrigin: {
    horizontal: 'left',
    vertical: 'bottom',
  },
};

export const WithAction = Template.bind({});
WithAction.args = {
  ...defaultArgs,
  title: 'WithAction',
  action: Action,
};

export const Customized = CustomizedTemplate.bind({});
Customized.args = {
  ...defaultArgs,
  title: 'Customized',
  anchorOrigin: {
    horizontal: 'left',
    vertical: 'bottom',
  },
};

type SnackbarOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
};

type PositionsState = SnackbarOrigin & {
  open: boolean;
};

export const Positions: ComponentStory<typeof Snackbar> = (props) => {
  const [state, setState] = useState<PositionsState>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'right',
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'left',
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'left',
        })}
      >
        Top-Left
      </Button>
    </>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
        {...props}
      />
    </div>
  );
};

type TransitionType = 'grow' | 'fade' | 'slide';

type TransitionsState = {
  open: boolean;
  transition: TransitionType;
};

export const Transitions: ComponentStory<typeof Snackbar> = (props) => {
  const [{ transition, open }, setState] = useState<TransitionsState>({
    open: false,
    transition: 'grow',
  });

  const transitionComponent = {
    grow: Grow,
    fade: Fade,
    slide: Slide,
  };

  const handleClick = (transitionType: TransitionType) => () => {
    setState({ open: true, transition: transitionType });
  };

  const handleClose = () => {
    setState((state) => ({ ...state, open: false }));
  };

  const buttons = (
    <>
      <Button onClick={handleClick('grow')}>Grow</Button>
      <Button onClick={handleClick('fade')}>Fade</Button>
      <Button onClick={handleClick('slide')}>Slide</Button>
    </>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={transition}
        TransitionComponent={transitionComponent[transition]}
        {...props}
      />
    </div>
  );
};
