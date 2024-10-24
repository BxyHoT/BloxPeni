import { FieldValues, UseFormHandleSubmit } from "react-hook-form";
import style from "./AccountForm.module.scss";
import React from "react";
import { IApiHooks } from "../../redux/api/api";
import { Alert, Spin } from "antd";

interface IAccountFormProps {
  header: string;
  children: React.ReactNode;
  handler: UseFormHandleSubmit<FieldValues, undefined>;
  fetch: IApiHooks;
  getFethParam: (data: FieldValues) => FieldValues;
}

export const AccountForm: React.FC<IAccountFormProps> = ({
  header,
  handler,
  children,
  fetch,
  getFethParam,
}) => {
  const [submit, { isLoading, isError, isSuccess, error, data }] = fetch();
  console.log(error, isSuccess);

  return (
    <Spin spinning={isLoading}>
      {isError && <Alert message={error.data.errors.message} type="error" />}
      {isSuccess && <Alert message="Success" type="success" />}
      <form
        onSubmit={handler((data) => {
          // console.log(data);
          // console.log(getFethParam(data));
          submit(getFethParam(data));
        })}
      >
        <h3 className={style.AccountForm__header}>{header}</h3>
        {children}
      </form>
    </Spin>
  );
};
// Тут есть куча проблем, надо разобраться
