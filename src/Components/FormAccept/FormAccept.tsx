import { Divider } from "antd";
import style from "./FormAccept.module.scss";

export const FormAccept: React.FC = () => {
  return (
    <>
      <Divider className={style.divider} />
      <label className={style.FormAccept}>
        <input type="checkbox"></input>
        <span>I agree to the processing of my personal information</span>
      </label>
    </>
  );
};
