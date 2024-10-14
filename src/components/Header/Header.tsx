import { ReactNode } from 'react';
import styles from './styles.module.css';
import Logo from '../Logo/Logo';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Grid from '../Grid/Grid';

type BreadcrumbsProps = {
  currentPage: string;
}

const Header = ({ currentPage }: BreadcrumbsProps): ReactNode => {
  return (
    <header className={ styles.container }>
      <Grid>
        <div className={styles.logoContainer}>
        <Logo />
        </div>
        <Breadcrumbs currentPage={ currentPage } />
      </Grid>
    </header>
  );
}

export default Header;