import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aachv",
  description: "my blog",
  // header标签里面插入的内容
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },

    //自定义上下页名
    // docFooter: {
    //   prev: "上一页",
    //   next: "下一页",
    // },

    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Programming",
        items: [
          { text: "C++", link: "/c++/init" },
          { text: "React", link: "/react/react-index" },
        ],
      },
      {
        text: "Databases",
        items: [
          { text: "Mongo", link: "/databases/mongo/mongo-intro" },
          { text: "MySql", link: "/databases/mysql/mysql-intro" },
        ],
      },
      {
        text: "Blog",
        link: "/blog/markdown.md",
      },
      {
        text: "CV",
        link: "curriculum-vitae/cv",
      },
    ],

    sidebar: {
      "/react/": [
        {
          text: "React",
          items: [
            { text: "base", link: "/react/base" },
            { text: "react-index", link: "/react/react-index" },
            { text: "nextjs", link: "/react/nextjs" },
          ],
        },
      ],
      "/databases/": [
        {
          text: "Mongo",
          collapsed: false,
          items: [
            { text: "intro", link: "/databases/mongo/mongo-intro" },
            { text: "deploy", link: "/databases/mongo/mongo-deploy" },
            { text: "conf", link: "/databases/mongo/mongod-conf" },
            { text: "curd", link: "/databases/mongo/mongo-curd" },
            { text: "cluster", link: "/databases/mongo/mongo-cluster" },
          ],
        },
        {
          text: "Mysql",
          items: [{ text: "Mysql", link: "/databases/mysql/mysql-intro" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "some message ICP etc.",
      copyright: " © 2024-wmdboke",
    },

    // 文档的最后更新时间
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
