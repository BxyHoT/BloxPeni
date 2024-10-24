import { Header as HeaderANTD } from "antd/es/layout/layout";
import style from "./Header.module.scss";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

const setActive = ({ isActive }: NavLinkRenderProps) =>
  isActive ? style.active + " " + style.link : style.link;

export const Header: React.FC = () => {
  return (
    <HeaderANTD className={style.Head}>
      <div className={style.Header}>
        <h6>
          <NavLink to="/articles">Realworld Blog</NavLink>
        </h6>
        <div>
          <NavLink to={"/sign-in"} className={setActive}>
            Sign In
          </NavLink>
          <NavLink to={"/sign-up"} className={setActive}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </HeaderANTD>
  );
};
