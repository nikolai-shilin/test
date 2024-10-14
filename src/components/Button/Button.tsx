import { ReactNode } from 'react';
import styles from './styles.module.css';


type ButtonProps = {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className={ styles.container }>
      { children }
    </button>
  );
};

export default Button;