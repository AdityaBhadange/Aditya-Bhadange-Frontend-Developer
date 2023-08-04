import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Rocket, Capsule } from '../types/spaceX.types';

export const spaceXApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://someUrl.com' }),
  endpoints: (builder) => ({
    getRockets: builder.query<Rocket[], unknown>({
      query: () => 'rockets'
    }),
    getCapsules: builder.query<Capsule[], unknown>({
      query: () => 'capsules'
    })
  })
});

export const { useGetRocketsQuery, useGetCapsulesQuery } = spaceXApi;
