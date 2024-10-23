import "./App.scss";
import { Header } from "./Components/Header/Header";
import { ConfigProvider, Layout } from "antd";
import { theme } from "./Theme/Theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Header />
      </Layout>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
