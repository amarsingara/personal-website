import { ImGithub, ImLinkedin, ImCloudDownload } from "react-icons/im";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/amarsingara",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/amarpreet-singara-1613741b1/",
  },
  {
    title: "Download",
    icon: <ImCloudDownload color='#000000dc' />,
    link: require('../pages/Home/resume_amar.pdf'),
  },
];
