import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b717715c1bmsh014547376372c82p1ce1f4jsn8fe91e01ed56');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}`}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;