import { ReactNode } from 'react';
import styles from "./styles.module.css";
import up from "../../assets/icons/up.svg";
import down from "../../assets/icons/down.svg";
import save from "../../assets/icons/save.svg";
import search from "../../assets/icons/search.svg";
import left from "../../assets/icons/left.svg";
import right from "../../assets/icons/right.svg";

type IconProps = {
  name: 'up' | 'down' | 'save' | 'search' | 'left' | 'right',
  size: 'small' | 'medium' | 'large',
};


const getIconSource = (name: string) => {
  switch (name) {
    case 'up':
      return up;
    case 'down':
      return down;
    case 'save':
      return save;
    case 'search':
      return search;
    case 'left':
      return left;
    case 'right':
      return right;
    default:
      throw new Error('Invalid icon name');
  }
}


const Icon = ({ name, size }: IconProps): ReactNode => {


  const iconClass = [styles.icon, styles[size]].join(' ');

  return (
    <img
      className={ iconClass }
      src={ getIconSource(name) }
      alt={ name }
    />
  );
};

export default Icon;