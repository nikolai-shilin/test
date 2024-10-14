import { Log } from '../../types';
import { ReactNode, useEffect, useState } from 'react';
import LogsTable from '../LogsTable/LogsTable';
import mock from './mock.json';
import PageTitle from '../PageTitle/PageTitle';
// import Search from '../Search/Search';
import styles from './styles.module.css';
import Dropdown from '../Dropdown/Dropdown';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';


const sources = ["3 sources", "5 sources", "10 sources"];
const periods = ["last 14 days", "1 month", "3 months", "6 months"];


const LogsView = (): ReactNode => {

  const [source, setSource] = useState(sources[0]);
  const [period, setPeriod] = useState(periods[0]);
  const [query, setQuery] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);

  const fetchLogs = async () => {
    const data = await Promise.resolve(mock);
    const logsList: Log[] = data.map((log: any) => {
      return {
        id: log.id,
        time: new Date(log.time),
        service: log.service,
        level: log.level,
        data: log.data
      }
    });

    setLogs(logsList);
  }


  useEffect(() => {
    fetchLogs();
  }, [sources, period, query]);


  return (
    <main className={ styles.container }>
      <PageTitle>Logs</PageTitle>
      <div className={ styles.search }>
        <Dropdown
          items={ sources }
          selectedItem={ source }
          setSelectedItem={ setSource }

        />
        <Dropdown
          items={ periods }
          selectedItem={ period }
          setSelectedItem={ setPeriod }
        />
        <SearchInput
          query={query}
          setQuery={setQuery}
        />
        <Button>Run Query</Button>
      </div>
      <LogsTable logs={ logs } />
    </main>
  );
}

export default LogsView;