import style from "./AccountForm.module.scss";
import React from "react";

interface IAccountFormProps {
  header: string;
  children: React.ReactNode;
}

export const AccountForm: React.FC<IAccountFormProps> = ({
  header,

  children,
}) => {
  return (
    <form>
      <h3 className={style.AccountForm__header}>{header}</h3>
      {children}
    </form>
  );
};
