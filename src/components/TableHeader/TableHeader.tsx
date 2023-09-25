import { TableSortLabel } from '@mui/material';
import { MouseEvent } from 'react';
import TableCell from '../TableCell/TableCell';
import TableRow from '../TableRow/TableRow';
import Typography from '../Typography/Typography';

export type HeadCellKey = Record<symbol, symbol>;

export type OrderData<
  Data extends HeadCellKey,
  ExtraField extends string = '',
> = {
  order?: 'asc' | 'desc';
  orderBy?: string | ExtraField;
  onRequestSort?: (
    event: MouseEvent<unknown>,
    property: keyof Data | ExtraField,
  ) => void;
};

export type HeaderArray<
  Data extends HeadCellKey,
  ExtraField extends string = '',
> = Array<{
  id: keyof Data | ExtraField;
  label: string;
  colSpan?: number;
  ordernable?: boolean;
}>;

type TableHeaderProps<
  Data extends HeadCellKey,
  ExtraField extends string = '',
> = {
  headerData: HeaderArray<Data, ExtraField>;
  orderData?: OrderData<Data, ExtraField>;
};

export function TableHeader<
  Data extends HeadCellKey,
  ExtraField extends string = '',
>({ headerData, orderData = {} }: TableHeaderProps<Data, ExtraField>) {
  const { order, orderBy, onRequestSort } = orderData;
  const createSortHandler =
    (property: keyof Data | ExtraField) => (event: MouseEvent<unknown>) => {
      if (onRequestSort) {
        onRequestSort(event, property);
      }
    };

  return (
    <TableRow>
      {headerData.map(({ label, id, colSpan, ordernable }) => (
        <TableCell
          key={id.toString()}
          align="left"
          colSpan={colSpan || 1}
          sortDirection={orderBy === id ? order : false}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            {ordernable ? (
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : 'asc'}
                onClick={createSortHandler(id)}
              >
                <Typography>{label}</Typography>
              </TableSortLabel>
            ) : (
              <Typography>{label}</Typography>
            )}
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
}

export default TableHeader;
