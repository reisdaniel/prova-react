import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Link,
  Paper,
  TableContainer,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

const MoviesTable = ({ data, onEdit, onDelete, onDetails }) => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Título',
        cell: ({ row }) => (
          <Link
            component="button"
            variant="body1"
            onClick={() => onDetails(row.original)}
            sx={{
              color: '#1976D2',
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {row.original.title}
          </Link>
        ),
      },
      { accessorKey: 'release_date', header: 'Data de Lançamento' },
      { accessorKey: 'vote_average', header: 'Nota' },
      { accessorKey: 'vote_count', header: 'Votos' },
      { accessorKey: 'original_language', header: 'Idioma' },
      {
        header: 'Ações',
        cell: ({ row }) => (
          <>
            {/* Botão de Detalhes */}
            <Tooltip title="Detalhes">
              <IconButton
                color="primary"
                onClick={() => onDetails(row.original)}
                size="small"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>

            {/* Botão de Edição */}
            <Tooltip title="Editar">
              <IconButton
                color="primary"
                onClick={() => onEdit(row.original)}
                size="small"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            {/* Botão de Exclusão */}
            <Tooltip title="Excluir">
              <IconButton
                color="secondary"
                onClick={() => onDelete(row.original.id)}
                size="small"
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.2)' },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
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
    <TableContainer
      component={Paper}
      elevation={4}
      sx={{ borderRadius: '12px', overflow: 'hidden' }}
    >
      <Table>
        {/* Cabeçalho da Tabela */}
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} sx={{ backgroundColor: '#1976D2' }}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  sx={{
                    color: '#FFF',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderBottom: 'none',
                    padding: '12px',
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        {/* Corpo da Tabela */}
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: '#F9FAFB' },
                '&:hover': {
                  backgroundColor: '#E3F2FD',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  sx={{
                    padding: '12px',
                    textAlign: 'center',
                    fontSize: '0.95rem',
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;
