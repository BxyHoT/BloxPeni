import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://blog-platform.kata.academy/api";

interface IAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: IAuthor;
}

interface ArticleDTO {
  article: IArticle;
}

interface ArticlesDTO {
  articles: IArticle[];
  articlesCount: number;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesDTO, number>({
      query: (offset) => "articles?limit=5&offset=" + offset,
      keepUnusedDataFor: 0,
    }),
    getArticle: builder.query<ArticleDTO, string>({
      query: (slug) => "articles/" + slug,
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery } = api;
