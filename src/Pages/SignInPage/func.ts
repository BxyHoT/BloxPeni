import { FieldValues } from "react-hook-form";

export const getFetchParam = (data: FieldValues): FieldValues => {
  const { email, password } = data;
  return { email, password };
};
