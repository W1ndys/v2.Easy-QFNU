import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "快速开始",
    link: "/QuickStart/",
    icon: "fa-rocket"
  },
  { 
    text: "Easy-校园",
    link: "/EasySchool/",
    icon: "fa-school"
  },
  {
    text: "Easy-选课",
    link: "/EasySelectCourse/",
    icon: "fa-book"
  },
  {
    text: "Easy-学院",
    link: "/EasyCollege/",
    icon: "fa-building"
  },
  {
    text: "其他",
    link: "/Other/",
    icon: "fa-ellipsis"
  },
  {
    text: "demo",
    link: "/demo/",
    icon: "fa-code"
  }
]);
