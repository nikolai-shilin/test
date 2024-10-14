import { ReactNode } from 'react';
// import { LogLevel } from '../../types/index';
import styles from './styles.module.css';
import { LogLevel } from '../../types';

type LogLevelLabelProps = {
  value: LogLevel;
}

const LogLevelLabel = ({ value }: LogLevelLabelProps): ReactNode => {

  let classNames = [styles.logsLevelLabel, styles[value.toLowerCase()]].join(" ");

  return (
    <div className={classNames}>
      { value }
    </div>
  );
}

export default LogLevelLabel;