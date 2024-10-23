import { Outlet } from "react-router-dom";
import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Layout } from "antd";

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default App;
