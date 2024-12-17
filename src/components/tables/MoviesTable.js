import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

const MoviesTable = ({ data, onEdit }) => {
  const columns = React.useMemo(
    () => [
      { accessorKey: 'title', header: 'Title' },
      { accessorKey: 'release_date', header: 'Release Date' },
      { accessorKey: 'vote_average', header: 'Rating' },
      { accessorKey: 'vote_count', header: 'Votes' },
      { accessorKey: 'original_language', header: 'Language' },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <button onClick={() => onEdit(row.original)}>Edit</button>
        ),
      },
    ],
    [onEdit]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
