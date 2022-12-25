import React, { FC, useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'mantine-react-table';
import { ContentCopy } from '@mui/icons-material';
import { data, Person } from './makeData';

const Example: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
        enableClickToCopy: true,
        muiTableBodyCellCopyButtonProps: {
          fullWidth: true,
          startIcon: <ContentCopy />,
          sx: { justifyContent: 'flex-start' },
        },
      },
      {
        accessorKey: 'city',
        header: 'City',
        enableClickToCopy: true,
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;