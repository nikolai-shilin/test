import { ReactNode } from 'react';
import styles from './styles.module.css';

type LogPreviewProps = {
  data: { [key: string]: string };
}

const LogPreview = ({ data }: LogPreviewProps): ReactNode => {

  const names = Object.keys(data);

  return (
    <div className={ styles.container }>
      <table className={ styles.propTable }>
        <tbody>
          { names.map((name) => (
            <tr key={ name }>
              <td className={ styles.propName }>"{ name }":</td>
              <td className={ styles.propValue }>"{ data[name] }"</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default LogPreview;