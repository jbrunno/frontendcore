import { Fragment, ReactNode } from 'react';
import { Table as MuiTable } from '@mui/material';
import { Waypoint } from 'react-waypoint';
import {
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePaginationProps,
  TableRow,
  TableCell,
} from '../index';
import {
  TableHeader,
  HeadCellKey,
  HeaderArray,
  OrderData,
} from '../TableHeader/TableHeader';
import { TablePaginationStyled, TableRowStyled } from './Table.styles';

export type TableProps<
  BodyData,
  Data extends HeadCellKey,
  ExtraField extends string = '',
> = {
  header?: ReactNode;
  headerData?: HeaderArray<Data, ExtraField>;
  bodyData: Array<BodyData>;
  children: (mapRow: BodyData, index?: number) => ReactNode;
  pagination?:
    | (TablePaginationProps & {
        hasNextPage?: boolean;
      })
    | null;
  orderData?: OrderData<Data, ExtraField>;
  scrollPagination?: boolean;
  stickyHeader?: boolean;
  className?: string;
};

export function Table<
  BodyData,
  Data extends HeadCellKey,
  ExtraField extends string = '',
>({
  header,
  children,
  headerData,
  bodyData,
  pagination,
  orderData,
  scrollPagination,
  stickyHeader = true,
  className,
}: TableProps<BodyData, Data, ExtraField>) {
  const key = (index: number) => index.toString();
  return (
    <TableContainer className={className}>
      <MuiTable stickyHeader={stickyHeader}>
        <TableHead>
          {header}
          {headerData && (
            <TableHeader headerData={headerData} orderData={orderData} />
          )}
        </TableHead>
        <TableBody>
          {bodyData.map((body: BodyData, index) => (
            <Fragment key={key(index)}>
              <TableRowStyled>{children(body, index)}</TableRowStyled>
              <TableRowStyled>
                {scrollPagination &&
                  pagination?.hasNextPage &&
                  index === bodyData.length - 1 && (
                    <TableCell>
                      <Waypoint
                        onEnter={() => {
                          if (pagination?.onPageChange) {
                            pagination.onPageChange(null, pagination.page + 1);
                          }
                        }}
                      />
                    </TableCell>
                  )}
              </TableRowStyled>
            </Fragment>
          ))}
        </TableBody>
        {pagination && !scrollPagination && (
          <TableFooter>
            <TableRow>
              <TablePaginationStyled
                {...pagination}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
              />
            </TableRow>
          </TableFooter>
        )}
      </MuiTable>
    </TableContainer>
  );
}

export default Table;
