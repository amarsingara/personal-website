const Zoom = require("react-reveal/Zoom");

import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import { useState } from 'react'
import profilePic from "../../assets/profile_cartoon.jpg";
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';
import { Tooltip } from 'react-tooltip'

const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  const [hsva, setHsva] = useState({ h: 271, s: 96, v: 96, a: 1 });
  const [showWheel, setShowWheel] = useState(false);

  const handleClick = () => {
    setShowWheel(!showWheel)
  }

  const changeColor = (color: any) => {
    setHsva({ ...hsva, ...color.hsva })
    const root = document.documentElement;
    root.style.setProperty('--background-color', hsvaToHex(hsva));
  }

  return (
    <div className={styles.home}>
      <Tooltip id="my-tooltip" />
      <Zoom cascade>
        {showWheel ? <Wheel color={hsva} onChange={changeColor} onDoubleClick={handleClick}/>: <a data-tooltip-id="my-tooltip" data-tooltip-content="Double Click Me!"><img src={profilePic} alt='Profile' className={styles.image} onDoubleClick={handleClick} /></a>}
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{AboutData.about1}</h3>
        <h3 className={styles.about_next}>{AboutData.about2}</h3>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
