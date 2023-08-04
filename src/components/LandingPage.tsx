import React from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { useGetCapsules, useGetRockets } from '../redux/api.hooks';

const LandingPage = () => {
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

  // Define table columns for rockets
  const rocketColumns: MRT_ColumnDef[] = [
    {
      accessorKey: 'rocket_name',
      header: 'Name'
    }
    // Add more columns based on the data structure
  ];

  // Define table columns for capsules
  const capsuleColumns: MRT_ColumnDef[] = [
    {
      accessorKey: 'capsule_serial',
      header: 'Name'
    }
    // Add more columns based on the data structure
  ];

  return (
    <div>
      <h2>Rockets</h2>
      <MaterialReactTable columns={rocketColumns} data={rockets} />

      <h2>Capsules</h2>
      <MaterialReactTable columns={capsuleColumns} data={capsules} />
    </div>
  );
};

export default LandingPage;
