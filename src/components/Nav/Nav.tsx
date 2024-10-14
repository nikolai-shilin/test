import { ReactNode } from 'react';
import styles from './styles.module.css';

type NavProps = {
  currentPage: | "Home" | "Dashboards" | "Metrics" | "Logs" | "Traces" | "Settings"
}


const items = ["Home", "Dashboards", "Metrics", "Logs", "Traces", "Settings"];


const Nav = ({ currentPage }: NavProps): ReactNode => {

  const navActiveClass = [styles.navItem, styles.active].join(' ');
  const navClass = styles.navItem;

  return (
    <nav>
      <ul className={ styles.contaniner }>
        { items.map((page) => (
          <li key={ page } className={ styles.navItemContainer }>
            <a href="#" className={ currentPage === page ? navActiveClass : navClass }>
              { page }
            </a>
          </li>
        )) }
      </ul>
    </nav>
  )
}

export default Nav;