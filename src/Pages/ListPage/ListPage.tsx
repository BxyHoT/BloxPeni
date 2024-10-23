import { useGetArticlesQuery } from "../../redux/api/api";
import { Spin, Alert, Pagination } from "antd";
import { PostItem } from "../../Components/PostItem/PostItem";
import style from "./ListPage.module.scss";
import { getOffset } from "./func";
import { useState } from "react";

export const ListPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isError } = useGetArticlesQuery(offset);
  console.log(data);

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
    <Spin spinning={isLoading} className={style.Alert} size="large">
      <ul className={style.ListPage}>
        {data?.articles.map((article) => (
          <li
            key={article.createdAt + article.author.username + article.slug}
            className={style.container}
          >
            <PostItem article={article} />
          </li>
        ))}
      </ul>
      <Pagination
        align="center"
        pageSize={5}
        total={data?.articlesCount}
        showSizeChanger={false}
        className={style.pagination}
        hideOnSinglePage
        onChange={(page) => {
          setOffset(getOffset(page));
        }}
      />
    </Spin>
  );
};
