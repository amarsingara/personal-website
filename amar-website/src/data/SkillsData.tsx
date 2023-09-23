import { FaReact, FaNodeJs, FaHtml5, FaSass, FaJava, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiBootstrap,
  SiPwa,
  SiPython,
  SiRubyonrails,
  SiMysql,
  SiSwift
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color='#000000dc' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color='#000000dc' />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "Android",
    icon: <AiFillAndroid color='#000000dc' />,
    link: "https://developer.android.com/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color='#000000dc' />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "PWA",
    icon: <SiPwa color='#000000dc' />,
    link: "https://web.dev/progressive-web-apps/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
  {
    name: "Python",
    icon: <SiPython color='#000000dc' />,
    link: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: <FaJava color='#000000dc' />,
    link: "https://www.java.com/",
  },
  {
    name: "Ruby on Rails",
    icon: <SiRubyonrails color='#000000dc' />,
    link: "https://rubyonrails.org/",
  },
  {
    name: "SQL",
    icon: <SiMysql color='#000000dc' />,
    link: "https://www.mysql.com/",
  },
  {
    name: "Swift",
    icon: <SiSwift color='#000000dc' />,
    link: "https://developer.apple.com/swift/",
  },
  {
    name: "VueJs",
    icon: <FaVuejs color='#000000dc' />,
    link: "https://vuejs.org/",
  },
];




