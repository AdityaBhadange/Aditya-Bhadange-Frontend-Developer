import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spaceXApi= createApi({
  baseQuery : fetchBaseQuery({ baseUrl: 'https://someUrl.com' }),
  endpoints: (builder) => ({
    getRockets: builder.query({
      query: () => 'rockets'
    }),
    getCapsules: builder.query({
      query: () => 'capsules'
    })
  })
})

export const { useGetRocketsQuery, useLazyGetCapsulesQuery } = spaceXApi
