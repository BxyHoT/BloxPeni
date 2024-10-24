import { useGetArticlesQuery } from "../../redux/api/api";
import { Spin, Alert, Pagination } from "antd";
import { PostItem } from "../../Components/PostItem/PostItem";
import style from "./ListPage.module.scss";
import { getOffset } from "./func";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import { setOffset } from "../../redux/slice/pagination/pagination";
import { useEffect, useState } from "react";

export const ListPage: React.FC = () => {
  const [offset, setOffset] = useState(0);
  // const offset = useAppSelector((state) => state.pagination.offset);
  // const dispatch = useAppDispatch();
  console.log(offset);

  const { data, isLoading, isError, refetch } = useGetArticlesQuery(offset);

  console.log(isLoading);

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
        {data?.articles.map((article) => {
          // console.log(
          //   article.updatedAt +
          //     article.author.username +
          //     article.slug +
          //     article.title
          // );
          return (
            <li
              key={
                article.updatedAt +
                article.author.username +
                article.slug +
                article.title
              }
              className={style.container}
            >
              <PostItem article={article} />
            </li>
          );
        })}
      </ul>
      <Pagination
        align="center"
        pageSize={5}
        total={data?.articlesCount}
        showSizeChanger={false}
        className={style.pagination}
        hideOnSinglePage
        onChange={(page) => {
          // dispatch(setOffset(getOffset(page)));
          // refetch();
          setOffset(getOffset(page));
        }}
      />
    </Spin>
  );
};
