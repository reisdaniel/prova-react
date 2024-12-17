import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

const MoviesTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { accessorKey: 'title', header: 'Title' },
      { accessorKey: 'release_date', header: 'Release Date' },
      { accessorKey: 'vote_average', header: 'Rating' },
      { accessorKey: 'vote_count', header: 'Votes' },
      { accessorKey: 'original_language', header: 'Language' },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      {/* Cabeçalho */}
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* Corpo */}
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
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
