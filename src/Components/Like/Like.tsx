import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import style from "./Like.module.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

interface ILikeProps {
  like: boolean;
  likeCount: number;
}

export const Like: React.FC<ILikeProps> = ({ like, likeCount }) => {
  return (
    <Checkbox checked={like} className={style.Like}>
      {like ? (
        <HeartFilled className={style.heart + "  " + style.heartRed} />
      ) : (
        <HeartOutlined className={style.heart} />
      )}
      {likeCount}
    </Checkbox>
  );
};
