import { defineUserConfig } from "vuepress";
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: '三三文档',
  description: '33Book',

  theme,
  
  plugins: [
    slimsearchPlugin({
      // 配置项
    }),
  ],
});
