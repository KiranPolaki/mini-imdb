import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// * FYI https://ghibliapi.vercel.app/#tag/Films%2Fpaths%2F~1films%2Fget explore tge api here - if you are wondering where i got this test data from
export const ghibliApi = createApi({
  reducerPath: "ghibliApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => "/films",
    }),
    getFilmDetails: builder.query({
      query: (filmId) => `/films/${filmId}`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = ghibliApi;
