import { Fragment, ReactNode, useEffect, useState } from 'react';
import { Log } from '../../types';
import styles from './styles.module.css';
import LogLevelLabel from "../LogLevelLabel/LogLevelLabel";
import LogPreview from '../LogPreview/LogPreview';
import Icon from '../Icon/Icon';
import { getFormattedDate } from '../../utils/time';
import Pagination from '../Pagination/Pagination';
import DropdownMultiple from '../DropdownMultiple/DropdownMultiple';

type LogsTableProps = {
  logs: Log[];
}

const columnsAll: string[] = ["time", "level", "service"];
const levelsAll: string[] = ["INFO", "ERROR", "WARN", "DEBUG"];

const perPageAll = [10, 20, 50, 100];


const LogsTable = ({ logs }: LogsTableProps): ReactNode => {

  const [selectedLogId, setSelectedLogId] = useState("");
  const [filteredLogs, setFilteredLogs] = useState(logs);
  const [paginatedFilteredLogs, setPaginatedFilteredLogs] = useState(filteredLogs.slice(0, perPageAll[0]));

  const [columns, setColumns] = useState(columnsAll);
  const [levels, setLevels] = useState(levelsAll);

  const [perPage, setPerPage] = useState(perPageAll[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleLogClick = (logId: string) => {
    if (selectedLogId === logId) {
      setSelectedLogId("");
      return;
    }
    setSelectedLogId(logId);
  }

  const switchColumn = (column: string) => {
    if (columns.includes(column)) {
      setColumns(columns.filter((c) => c !== column));
    } else {
      setColumns([...columns, column]);
    }
  }

  const switchLevel = (level: string) => {
    if (levels.includes(level)) {
      setLevels(levels.filter((c) => c !== level));
    } else {
      setLevels([...levels, level]);
    }
  }

  useEffect(() => {
    setFilteredLogs(logs.filter((log) => levels.includes(log.level)));
  }, [levels, logs]);

  useEffect(() => {
    setPaginatedFilteredLogs(filteredLogs.slice(currentPage * perPage, (currentPage + 1) * perPage));
  }
    , [perPage, currentPage, filteredLogs]);


  return (
    <>
      <div className={ styles.filters }>
        <DropdownMultiple
          name="Table columns"
          items={ columnsAll }
          selectedItems={ columns }
          switchSelectedItem={ switchColumn }
        />
        <DropdownMultiple
          name="Levels"
          items={ levelsAll }
          selectedItems={ levels }
          switchSelectedItem={ switchLevel }
        />
      </div>
      <table className={ styles.table }>
        <colgroup>
          <col className={ styles.colIcon } />
          { columns.includes("time") &&
            <col className={ styles.colTime } />
          }
          { columns.includes("level") &&
            <col className={ styles.colLevel } />
          }
          { columns.includes("service") &&
            <col className={ styles.colService } />
          }
          <col className={ styles.colLog } />
        </colgroup>
        <thead>
          <tr>
            <th className={ styles.th }></th>
            { columns.includes("time") &&
              <th className={ styles.th }>Time</th>
            }
            { columns.includes("level") &&
              <th className={ styles.th }>Level</th>
            }
            { columns.includes("service") &&
              <th className={ styles.th }>Service Name</th>
            }
            <th className={ styles.th }>Log</th>
          </tr>
        </thead>
        <tbody>
          { paginatedFilteredLogs.map((log, index) => {
            const selected = selectedLogId === log.id;
            return (
              <Fragment key={ log.id + "-" + index }>
                <tr
                  className={ selected ? styles.selected : "" }
                  onClick={ () => handleLogClick(log.id) }
                >
                  <td className={ styles.tdIcon }>
                    <Icon name={ selected ? "up" : "down" } size="small" />
                  </td>
                  { columns.includes("time") &&
                    <td className={ styles.tdTime }>
                      { getFormattedDate(log.time) }
                    </td>
                  }
                  { columns.includes("level") &&
                    <td className={ styles.td }>
                      <LogLevelLabel value={ log.level } />
                    </td>
                  }
                  { columns.includes("service") &&
                    <td className={ styles.tdService }>
                      { log.service }
                    </td>
                  }
                  <td className={ styles.tdLogs }>
                    { JSON.stringify(log.data) }
                  </td>
                </tr>
                <tr className={ selected ? styles.selectedBottom : "" }>
                  <td colSpan={ columns.length + 2 }>
                    { selected && <LogPreview data={ log.data } /> }
                  </td>
                </tr>
              </Fragment>
            )
          }
          ) }
        </tbody>
      </table>
      <Pagination
        totalItems={ filteredLogs.length }
        perPage={ perPage }
        setPerPage={ setPerPage }
        perPageAll={ perPageAll }
        currentPage={ currentPage }
        setCurrentPage={ setCurrentPage }
      />
    </>
  );
}

export default LogsTable;