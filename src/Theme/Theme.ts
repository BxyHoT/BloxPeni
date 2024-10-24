import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {},
  components: {
    Layout: {
      headerBg: "#fff",
      headerHeight: 80,
      headerPadding: "16px 22px",
      bodyBg: "rgb(235, 238, 243)",
    },
    Pagination: {
      itemBg: "inherit",
      itemActiveBg: "rgb(24, 144, 255)",
    },
    Alert: {
      defaultPadding: "16px 22px",
    },
  },
};
