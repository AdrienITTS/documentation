import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AdrienITTS",
      description: "A docs demo for vuepress-theme-hope",
    }
  },

  theme,

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
});
