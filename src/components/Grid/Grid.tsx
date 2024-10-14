import { ReactNode } from 'react';
import styles from './styles.module.css';

type GridProps = {
  children: React.ReactNode;
}

const Grid  = ({ children }:GridProps): ReactNode => {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  );
}

export default Grid;