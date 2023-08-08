import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import React from 'react';
import { useGetRockets, useGetCapsules } from '../redux/api.hooks';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles/capsulesTable.styles';

const CapsulesTable = () => {
  const classes = useStyles();

  const rocketsQuery = useGetRockets();
  const capsulesQuery = useGetCapsules();

  if (rocketsQuery.isLoadingGetRockets || capsulesQuery.isLoadingGetCapsules) {
    return <div>Loading...</div>;
  }

  if (rocketsQuery.isErrorGetRockets || capsulesQuery.isErrorGetCapsules) {
    return <div>Error occurred while fetching data</div>;
  }

  const rockets = rocketsQuery.getRocketsData;
  const capsules = capsulesQuery.getCapsulesData;

  // // Define table columns for rockets
  // const rocketColumns: MRT_ColumnDef[] = [
  //   {
  //     accessorKey: 'rocket_name',
  //     header: 'Name'
  //   },
  //   {
  //     accessorKey: 'rocket_type',
  //     header: 'Type'
  //   },
  //   {
  //     accessorKey: 'country',
  //     header: 'Country'
  //   },
  //   {
  //     accessorKey: 'cost_per_launch',
  //     header: 'Cost Per Launch ($)'
  //   },
  //   {
  //     accessorKey: 'success_rate_pct',
  //     header: 'Success Rate'
  //   },
  //   {
  //     accessorKey: 'active',
  //     header: 'Active'
  //   },
  //   {
  //     accessorKey: 'first_flight',
  //     header: 'First Flight'
  //   },
  //   {
  //     accessorKey: 'height.meters',
  //     header: 'Height (meters)'
  //   },
  //   {
  //     accessorKey: 'mass.kg',
  //     header: 'Mass (kg)'
  //   },
  //   {
  //     accessorKey: 'diameter.meters',
  //     header: 'Diameter (meters)'
  //   },
  //   {
  //     accessorKey: 'payload_weights.kg',
  //     header: 'Payload Weights (kg)'
  //   },
  //   {
  //     accessorKey: 'first_stage.reusable',
  //     header: 'Reusable'
  //   }
  //   // Add more columns based on the data structure
  // ];

  // Define table columns for capsules
  const capsuleColumns: MRT_ColumnDef[] = [
    {
      accessorKey: 'capsule_serial',
      header: 'Capsule Serial'
    },
    {
      accessorKey: 'capsule_id',
      header: 'Capsule ID'
    },
    {
      accessorKey: 'status',
      header: 'Status'
    },
    {
      accessorKey: 'type',
      header: 'Type'
    },
    {
      accessorKey: 'details',
      header: 'Details'
    },
    {
      accessorKey: 'reuse_count',
      header: 'Reuse Count'
    },
    {
      accessorKey: 'landings',
      header: 'Landings'
    },
    {
      accessorKey: 'original_launch',
      header: 'Original Launch'
    }
    // Add more columns based on the data structure
  ];

  console.log('rockets: ', rockets);
  console.log('capsules: ', capsules);

  return (
    <Box className={classes.container}>
      <Typography variant="h1">Capsules</Typography>
      <MaterialReactTable columns={capsuleColumns} data={capsules} />
    </Box>
  );
};

export default CapsulesTable;
