import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import React from 'react';
import { useGetRockets, useGetCapsules } from '../redux/api.hooks';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles/capsulesTable.styles';
import image2 from '../framework/assets/images/space-x-image-2.jpg';
import { Capsule } from '../types/spaceX.types';

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
  // ];

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
      accessorKey: 'original_launch',
      header: 'Original Launch'
    }
  ];

  // const onRowClickHandler = (rowData: any) => {
  //   console.log('rowData: ', rowData);
  // };

  // const cellClickFunc = (
  //   onRowClick: ((rowData: unknown) => void | undefined) | undefined,
  //   column: MRT_Column<Record<string, unknown>>,
  //   row: MRT_Row<Record<string, unknown>>
  // ): TableCellProps => {
  //   if (!onRowClick) {
  //     return {
  //       onClick: () => {
  //         return null;
  //       }
  //     };
  //   }
  //   return {
  //     onClick: () => {
  //       if (onRowClick) {
  //         onRowClick(row?.original);
  //       }
  //       return row.getToggleSelectedHandler();
  //     }
  //   };
  // };

  // Function to format capsule details
  const formatCapsuleDetails = (rowdata: Capsule) => {
    const parsedDetails: Capsule = JSON.parse(JSON.stringify(rowdata));

    return (
      <div>
        <p>Capsule Serial: {parsedDetails.capsule_serial}</p>
        <p>Capsule ID: {parsedDetails.capsule_id}</p>
        <p>Status: {parsedDetails.status}</p>
        <p>Original Launch: {new Date(parsedDetails.original_launch).toLocaleString()}</p>
        <p>Landings: {parsedDetails.landings}</p>
        <p>Type: {parsedDetails.type}</p>
        <p>Details: {parsedDetails.details}</p>
        <p>Reuse Count: {parsedDetails.reuse_count}</p>
        <p>Missions:</p>
        <ul>
          {parsedDetails.missions.map((mission, index) => (
            <li key={index}>{`Name: ${mission.name}, Flight: ${mission.flight}`}</li>
          ))}
        </ul>
      </div>
    );
  };

  const CapsuleDetails = (rowData: Capsule) => {
    return (
      <div>
        <h2>Capsule Details - </h2>
        {formatCapsuleDetails(rowData)}
      </div>
    );
  };

  return (
    <Box>
      <img
        src={image2}
        alt="Background"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          objectFit: 'cover'
        }}
      />
      <Box mt={4} className={classes.container}>
        <Typography mb={2} fontWeight={800} variant="h5" className={classes.textShadow}>
          CAPSULES DATA
        </Typography>
        <MaterialReactTable
          columns={capsuleColumns}
          data={capsules}
          initialState={{
            density: 'compact'
          }}
          enableStickyHeader
          renderDetailPanel={({ row }) => CapsuleDetails(row?.original as Capsule)}
          // muiTableBodyCellProps={({ column, row }) => {
          //   return cellClickFunc(onRowClickHandler, column, row);
          // }}
        />
      </Box>
    </Box>
  );
};

export default CapsulesTable;
