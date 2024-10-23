import { useGetArticlesQuery } from "../../redux/api/api";
import { Spin, Alert, Pagination } from "antd";

export const ListPage: React.FC = () => {
  const { data } = useGetArticlesQuery();
  return (
    <>
      <ul>
        {data?.articles.map((article) => (
          <li>{article.title}</li>
        ))}
      </ul>
      <Pagination />
    </>
  );
};
