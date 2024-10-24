import { FieldValues } from "react-hook-form";

export const getFetchParam = (data: FieldValues): FieldValues => {
  const { username, email, password } = data;
  return { username, email, password };
};
