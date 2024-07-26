import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

if (!rapidApiKey) {
  console.error(
    'RapidAPI key is not defined. Please set VITE_RAPID_API_KEY in your environment variables.'
  );
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders(headers) {
      if (rapidApiKey) {
        headers.set('x-rapidapi-key', rapidApiKey);
      } else {
        console.error('RapidAPI key is not set in headers.');
      }
      headers.set(
        'x-rapidapi-host',
        'article-extractor-and-summarizer.p.rapidapi.com'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
