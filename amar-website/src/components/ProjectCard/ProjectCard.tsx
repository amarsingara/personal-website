import { FC, useState } from "react";

import { LinkButton } from "./LinkButton";
import styles from "./projectCard.module.scss";
import ImgsViewer from "react-images-viewer";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  image6?: string
  GitHub: string;
  hosted: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<number>(0);

  const imgSet = [
    { src: props.image},
    props.image2? { src: props.image2 } : '',
    props.image3? { src: props.image3 } : '',
    props.image4? { src: props.image4 } : '',
    props.image5? { src: props.image5 } : '',
    props.image6? { src: props.image6 } : ''
  ]

  const filteredImgSet = imgSet.filter(o => Object.keys(o).length)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const nextImage = () => {
    setCurrImg(currImg + 1)
  }

  const prevImage = () => {
    setCurrImg(currImg - 1)
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.imagewrapper}>
        <img src={props.image} alt={props.title} onClick={handleClick}/>
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          {props.GitHub && <LinkButton isGitHub={true} link={props.GitHub} />}
          {props.hosted && <LinkButton isGitHub={false} pad={props.GitHub? true: false} link={props.hosted} />}
        </div>
      </div>
      <ImgsViewer
        imgs={filteredImgSet}
        isOpen={isOpen}
        currImg={currImg}
        onClickPrev={prevImage}
        onClickNext={nextImage}
        onClose={handleClick}
      />
    </div>
  );
};

export { ProjectCard };