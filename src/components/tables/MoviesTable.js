import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Link } from '@mui/material';

const MoviesTable = ({ data, onEdit, onDelete, onDetails }) => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
        cell: ({ row }) => (
          <Link
            component="button"
            variant="body1"
            onClick={() => onDetails(row.original)}
          >
            {row.original.title}
          </Link>
        ),
      },
      { accessorKey: 'release_date', header: 'Release Date' },
      { accessorKey: 'vote_average', header: 'Rating' },
      { accessorKey: 'vote_count', header: 'Votes' },
      { accessorKey: 'original_language', header: 'Language' },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => onEdit(row.original)}
              style={{ marginRight: '8px' }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => onDelete(row.original.id)}
            >
              Delete
            </Button>
          </>
        ),
      },
    ],
    [onEdit, onDelete, onDetails]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableCell key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MoviesTable;
