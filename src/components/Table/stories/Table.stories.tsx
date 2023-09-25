import {
  Edit as EditIcon,
  Lock,
  LockOpen,
  PhoneAndroid,
  WhatsApp,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import type { ComponentMeta } from '@storybook/react';
import { MouseEvent, useEffect, useState } from 'react';
import Checkbox from '../../Checkbox/Checkbox';
import Grid from '../../Grid/Grid';
import IconButton from '../../IconButton/IconButton';
import { TableCell } from '../../TableCell/TableCell';
import { HeaderArray } from '../../TableHeader/TableHeader';
import { TableRow } from '../../TableRow/TableRow';
import Tooltip from '../../Tooltip/Tooltip';
import Typography from '../../Typography/Typography';
import { Table } from '../Table';

export default {
  id: 'table',
  component: Table,
  title: 'Data Display/Table',
  argTypes: {
    scrollPagination: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
  },
} as ComponentMeta<typeof Table>;

const TableCellStyled = styled(TableCell)`
  border-bottom: ${({ theme }) => theme.fn.spacing(0)};
`;
const TypographyStyled = styled(Typography)`
  width: ${({ theme }) => theme.fn.size(130)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type ContatoTableBodyData = {
  id: number;
  contato: {
    nome: string;
    numero: string;
    whatsApp: boolean;
  };
  registroCarteiras: Array<string>;
  blocklist: Array<string>;
  dataBloqueio: {
    nome: string;
    temporario: boolean;
  };
  motivoBloqueio: string;
  usuario: string;
};

type ContatoTableBodyProps = {
  data: ContatoTableBodyData;
  isBlocklist: boolean;
};

function ContatoTableBody({ isBlocklist, data }: ContatoTableBodyProps) {
  return (
    <>
      <TableCellStyled>
        <Grid container>
          <Grid item xs={3}>
            <Checkbox />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body2" color="textSecondary">
              {data.contato.nome}
            </Typography>
            <Grid container alignItems="center">
              <Grid item xs={11}>
                <TypographyStyled variant="subtitle2" color="primary">
                  {data.contato.numero}
                </TypographyStyled>
              </Grid>
              <Grid item xs={1}>
                {data.contato.whatsApp ? <WhatsApp /> : <PhoneAndroid />}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TableCellStyled>
      <TableCellStyled>
        <Tooltip
          title={data.registroCarteiras.join(', ')}
          placement="top"
          arrow
        >
          <TypographyStyled variant="body2" color="primary">
            {data.registroCarteiras.join(', ')}
          </TypographyStyled>
        </Tooltip>
      </TableCellStyled>
      <TableCellStyled>
        <Tooltip title={data.blocklist.join(', ')} placement="top" arrow>
          <TypographyStyled variant="body2" color="primary">
            {data.blocklist.join(', ')}
          </TypographyStyled>
        </Tooltip>
      </TableCellStyled>
      <TableCellStyled>
        <Typography variant="body2" color="primary">
          {data.dataBloqueio.nome} {data.dataBloqueio.temporario && '- Temp.'}
        </Typography>
      </TableCellStyled>
      <TableCellStyled>
        <Typography variant="body2" color="primary">
          {data.motivoBloqueio}
        </Typography>
      </TableCellStyled>
      <TableCellStyled>
        <Typography variant="body2" color="primary">
          {data.usuario}
        </Typography>
      </TableCellStyled>
      {isBlocklist ? (
        <TableCellStyled colSpan={2}>
          <Grid container justifyContent="space-around" gap={2}>
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <Lock />
            </IconButton>
          </Grid>
        </TableCellStyled>
      ) : (
        <TableCellStyled align="center">
          <IconButton size="small">
            <LockOpen />
          </IconButton>
        </TableCellStyled>
      )}
    </>
  );
}

let id = 0;

const createData = (): ContatoTableBodyData => {
  id += 1;

  return {
    id,
    contato: {
      nome: `${id} Celular`,
      numero: `${id} (11) 99254-4321`,
      whatsApp: true,
    },
    registroCarteiras: ['Bradesco', 'Itaú', 'Sorocred', 'Duratex'],
    blocklist: ['Bradesco', 'Itaú', 'Sorocred', 'Duratex'],
    dataBloqueio: {
      nome: '22/03/2021 - 21:30',
      temporario: true,
    },
    motivoBloqueio: `${id} Em trâmites judiciais`,
    usuario: 'Josislane',
  };
};

const mockData: Array<ContatoTableBodyData> = [];

for (let i = 0; i < 51; i += 1) {
  mockData.push(createData());
}

const headerData: HeaderArray<ContatoTableBodyData, 'acoes'> = [
  {
    id: 'contato',
    label: 'Contato',
    ordernable: true,
  },
  {
    id: 'registroCarteiras',
    label: 'Registrado em',
    ordernable: true,
  },
  {
    id: 'blocklist',
    label: 'Blocklist',
    ordernable: true,
  },
  {
    id: 'dataBloqueio',
    label: 'Data do bloqueio/desbloq.',
  },
  {
    id: 'motivoBloqueio',
    label: 'Motivo do bloqueio/desbloq.',
  },
  {
    id: 'usuario',
    label: 'Usuário',
  },
  {
    id: 'acoes',
    label: 'Ações',
    colSpan: 2,
  },
];

interface Props {
  scrollPagination?: boolean;
}

export const Default = ({ scrollPagination }: Props) => {
  const [data, setData] = useState(mockData);

  const [pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 10,
    totalItems: data.length,
    items: data.slice(0, 10),
    hasNextPage: true,
  });

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof ContatoTableBodyData>('id');

  useEffect(() => {
    const sortData = [...data].sort((a, b) => {
      const compareA = a[orderBy];
      const compareB = b[orderBy];

      if (typeof compareA === 'string' && typeof compareB === 'string') {
        return order === 'asc'
          ? compareA.localeCompare(compareB)
          : compareB.localeCompare(compareA);
      }

      if (typeof compareA === 'number' && typeof compareB === 'number') {
        return order === 'asc' ? compareA - compareB : compareB - compareA;
      }

      return 0;
    });

    setData([...sortData]);

    setPagination({
      ...pagination,
      items: sortData.slice(0, pagination.pageSize),
    });
  }, [order, orderBy]);

  const handlePageChange = (
    event: MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => {
    if (scrollPagination) {
      setPagination({
        ...pagination,
        pageNumber: page,
        items: [
          ...pagination.items,
          ...data.slice(
            page * pagination.pageSize,
            page * pagination.pageSize + pagination.pageSize,
          ),
        ],
        hasNextPage:
          page * pagination.pageSize + pagination.pageSize < data.length,
      });
    } else {
      setPagination({
        ...pagination,
        pageNumber: page,
        items: data.slice(
          page * pagination.pageSize,
          page * pagination.pageSize + pagination.pageSize,
        ),
        hasNextPage:
          page * pagination.pageSize + pagination.pageSize < data.length,
      });
    }
  };

  return (
    <Table
      header={
        <TableRow>
          <TableCellStyled>
            <Grid container gap={2}>
              <Checkbox size="medium" color="primary" />
              <IconButton disabled>
                <EditIcon />
              </IconButton>
            </Grid>
          </TableCellStyled>
        </TableRow>
      }
      headerData={headerData}
      bodyData={pagination.items}
      scrollPagination={scrollPagination}
      pagination={{
        count: pagination.totalItems,
        page: pagination.pageNumber,
        rowsPerPage: pagination.pageSize,
        hasNextPage: pagination.hasNextPage,
        onPageChange: handlePageChange,
      }}
      orderData={{
        order,
        orderBy,
        onRequestSort(event, property) {
          const isAsc = orderBy === property && order === 'asc';
          setOrder(isAsc ? 'desc' : 'asc');
          if (property !== 'acoes') {
            setOrderBy(property);
          }
        },
      }}
    >
      {(contatoTableBody) => (
        <ContatoTableBody
          key={contatoTableBody.id}
          data={contatoTableBody}
          isBlocklist
        />
      )}
    </Table>
  );
};
