import style from "./AccountForm.module.scss";
import React from "react";

interface IAccountFormProps {
  header: string;
  buttonText: string;
  footerFormLink?: React.ReactNode;
}

export const AccountForm: React.FC<IAccountFormProps> = ({
  header,
  buttonText,
  footerFormLink,
}) => {
  return (
    <form>
      <h3 className={style.AccountForm__header}>{header}</h3>
      <button type="submit" className={style.AccountForm__button}>
        {buttonText}
      </button>
      {footerFormLink}
    </form>
  );
};
