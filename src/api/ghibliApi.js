import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
