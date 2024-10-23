import style from "./TagItem.module.scss";

interface ITagItemProps {
  tag: string;
}

export const TagItem: React.FC<ITagItemProps> = ({ tag }) => {
  return <li className={style.TagItem}>{tag}</li>;
};
