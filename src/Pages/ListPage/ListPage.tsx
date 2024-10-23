import { useGetArticlesQuery } from "../../redux/api/api";
import { Spin, Alert, Pagination } from "antd";
import { PostItem } from "../../Components/PostItem/PostItem";
import style from "./ListPage.module.scss";

export const ListPage: React.FC = () => {
  const { data, isLoading, isError } = useGetArticlesQuery();
  console.log(data);

  if (isLoading) {
    return <Spin fullscreen size="large" />;
  }

  if (isError) {
    return (
      <Alert
        message="ПРОИЗОШЛА ОГРОМНАЯ ОШИБКА, ПЕРЕУСТАНОВИТЕ ВИНДУ"
        type="error"
        className={style.Alert}
      />
    );
  }
  return (
    <>
      <ul className={style.ListPage}>
        {data?.articles.map((article) => (
          <PostItem
            article={article}
            key={article.createdAt + article.author.username}
          ></PostItem>
        ))}
      </ul>
      <Pagination
        align="center"
        pageSize={5}
        total={data?.articlesCount}
        showSizeChanger={false}
        className={style.pagination}
      />
    </>
  );
};
