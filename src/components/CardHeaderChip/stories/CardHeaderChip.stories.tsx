import { HelpOutline as HelpOutlineIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../../Box/Box';
import Button from '../../Button/Button';
import Card from '../../Card/Card';
import CardContent from '../../CardContent/CardContent';
import Chip from '../../Chip/Chip';
import Tooltip from '../../Tooltip/Tooltip';
import Typography from '../../Typography/Typography';

import { CardHeaderChip } from '../CardHeaderChip';

export default {
  title: '@CRM/CardHeaderChip',
  component: CardHeaderChip,
} as ComponentMeta<typeof CardHeaderChip>;

export const Default: ComponentStory<typeof CardHeaderChip> = (props) => (
  <Card>
    <CardHeaderChip
      title={<Typography variant="subtitle1">Produção comparada</Typography>}
      hasDivider={false}
      chip={
        <Tooltip
          title={
            <Typography>
              Comparativo da sua produção do dia anterior e de hoje em relação
              ao resto da equipe.
            </Typography>
          }
          arrow
        >
          <HelpOutlineIcon />
        </Tooltip>
      }
      {...props}
    />
    <CardContent>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      />
    </CardContent>
  </Card>
);

export const TitleIcon: ComponentStory<typeof CardHeaderChip> = (props) => (
  <Card>
    <CardHeaderChip
      title={<Typography variant="subtitle1">Produção comparada</Typography>}
      hasDivider={false}
      {...props}
    />
    <CardContent>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      />
    </CardContent>
  </Card>
);

const ChipStyled = styled(Chip)`
  margin-right: ${({ theme }) => theme.fn.spacing(5)};
`;

export const Chips: ComponentStory<typeof CardHeaderChip> = (props) => (
  <Card>
    <CardHeaderChip
      title={<Typography variant="h5">Produção comparada</Typography>}
      subTitle={<Typography variant="subtitle2">Comparativo</Typography>}
      hasDivider={false}
      chip={
        <>
          <ChipStyled label="Negativado" />
          <ChipStyled label="Falecido" />
          <ChipStyled label="Blocklist" />
        </>
      }
      action={
        <Button color="primary" variant="contained" key="Button">
          Button
        </Button>
      }
      {...props}
    />
    <CardContent>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      />
    </CardContent>
  </Card>
);
