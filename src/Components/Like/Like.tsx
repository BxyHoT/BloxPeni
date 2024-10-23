import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox";
import style from "./Like.module.scss";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

interface ILikeProps {
  like: boolean;
  likeCount: number;
}

export const Like: React.FC<ILikeProps> = ({ like: favorited, likeCount }) => {
  const [like, setLike] = useState(favorited);
  const [likeCounts, setLikeCounts] = useState(likeCount);

  const handleLike = (e: CheckboxChangeEvent) => {
    setLike(e.target.checked);
    setLikeCounts(e.target.checked ? likeCounts + 1 : likeCounts - 1);
  };

  return (
    <Checkbox checked={like} className={style.Like} onChange={handleLike}>
      {like ? (
        <HeartFilled className={style.heart + "  " + style.heartRed} />
      ) : (
        <HeartOutlined className={style.heart} />
      )}
      {likeCounts}
    </Checkbox>
  );
};
