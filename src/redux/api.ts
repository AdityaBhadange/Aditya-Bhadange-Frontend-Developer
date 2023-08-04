import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Rocket, Capsule } from '../types/spaceX.types';

export const spaceXApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com' }),
  endpoints: (builder) => ({
    getRockets: builder.query<Rocket[], unknown>({
      query: () => 'v3/rockets'
    }),
    getCapsules: builder.query<Capsule[], unknown>({
      query: () => 'v3/capsules'
    })
  })
});

export const { useGetRocketsQuery, useGetCapsulesQuery } = spaceXApi;
