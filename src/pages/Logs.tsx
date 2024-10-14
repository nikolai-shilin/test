import { ReactNode } from 'react';
import Header from '../components/Header/Header';
import LogsView from '../components/LogsView/LogsView';
import Nav from '../components/Nav/Nav';
import styles from './styles.module.css';
import Grid from '../components/Grid/Grid';

const Logs = (): ReactNode => {

  const currentPage = 'Logs';

  return (
    <div className={ styles.page }>
      <Header currentPage={currentPage} />
      <Grid>
        <Nav currentPage={ currentPage } />
        <LogsView />
      </Grid>
    </div>
  );
}

export default Logs;