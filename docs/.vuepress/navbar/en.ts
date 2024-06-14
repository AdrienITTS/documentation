import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/portfolio",
  "/demo/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "Linkedin",
    icon: "fa-brands fa-linkedin",
    link: "https://theme-hope.vuejs.press/",
  },
]);
