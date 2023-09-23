import { FC } from 'react';
import { FaGithub, FaRunning } from 'react-icons/fa';

import styles from './projectCard.module.scss';

interface LinkButtonProps {
  isGitHub: boolean;
  link: string;
  pad?: boolean;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <a
      className={props.isGitHub ? `${styles.github}` : `${styles.hosted}`}
      href={props.link}
      target='_blank'
      rel='noreferrer'
      style={{marginLeft: props.pad ? '2rem': '0'}}
    >
      {props.isGitHub ? <FaGithub /> : <FaRunning />}
      {props.isGitHub ? ' GitHub' : ' Live Here'}
    </a>
  );
};

export { LinkButton };
