import { Header as HeaderANTD } from "antd/es/layout/layout";
import style from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <HeaderANTD>
      <div className={style.Header}>
        <h6>
          <a>Realworld Blog</a>
        </h6>
        <div>
          <a className={style.link + " " + style.signIn_link}>Sign In</a>
          <a className={style.link}>Sign Up</a>
        </div>
      </div>
    </HeaderANTD>
  );
};
