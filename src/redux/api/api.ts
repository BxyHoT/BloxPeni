import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";

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

interface IUserLogin {
  email: string;
  password: string;
  token: string;
  bio: string | null;
  image: string | null;
}

interface LoginUserDTO {
  user: IUserLogin;
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
    createUser: builder.mutation<LoginUserDTO, FieldValues>({
      query: (userInfo) => ({
        url: "users",
        method: "POST",
        body: { user: userInfo },
      }),
    }),
    loginUser: builder.mutation<LoginUserDTO, FieldValues>({
      query: (userInfo) => ({
        url: "users/login",
        method: "POST",
        body: { user: userInfo },
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useCreateUserMutation,
  useLoginUserMutation,
} = api;

export type IApiHooks =
  | typeof useCreateUserMutation
  | typeof useLoginUserMutation;
