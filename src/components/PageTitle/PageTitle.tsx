import { ReactNode } from 'react';
import styles from './styles.module.css';

type PageTitleProps = {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps):ReactNode => {
  return (
    <h1 className={styles.container}>{children}</h1>
  );
}

export default PageTitle;