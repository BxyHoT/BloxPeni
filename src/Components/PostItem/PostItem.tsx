import { Avatar } from "antd";
import { IArticle } from "../../redux/api/api";
import style from "./PostItem.module.scss";
import { formatedDate } from "../../Components/PostItem/func";
import { TagItem } from "../TagItem/TagItem";
import { Like } from "../Like/Like";
import { Link } from "react-router-dom";

interface IPostItemProps {
  article: IArticle;
}

export const PostItem: React.FC<IPostItemProps> = ({
  article: {
    title,
    author,
    updatedAt,
    favoritesCount,
    tagList,
    description,
    favorited,
    slug,
  },
}) => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.heading}>
          <h5 className={style.title}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </h5>
          <Like likeCount={favoritesCount} like={favorited} />
        </div>
        <ul className={style.tags}>
          {tagList.map((tag) => (
            <TagItem tag={tag} key={tag} />
          ))}
        </ul>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.user}>
        <div>
          <p>{author.username}</p>
          <p className={style.date}>{formatedDate(updatedAt)}</p>
        </div>
        <Avatar size={46} src={author.image} />
      </div>
    </div>
  );
};
