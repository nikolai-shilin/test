import { ReactNode } from 'react';
import styles from './styles.module.css';


type BreadcrumbsProps = {
  currentPage: string;
}


const Breadcrumbs = ({ currentPage }:BreadcrumbsProps): ReactNode => {
  return (
    <div className={styles.container}>
      {currentPage}
    </div>
  );
}

export default Breadcrumbs;