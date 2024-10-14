import { ReactNode } from 'react';
import styles from './styles.module.css';
import Icon from '../Icon/Icon';


type SearchInputProps = {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput = ({ query, setQuery }: SearchInputProps): ReactNode => {
  return (
    <div className={ styles.container }>
      <div className={ styles.iconLeft }>
        <Icon name={ "search" } size="small" />
      </div>
      <input
        className={ styles.input }
        onChange={ (e) => setQuery(e.target.value) }
        placeholder="start typing your query"
        type="text"
        value={ query }
      />
      <div className={ styles.iconRight }>
        <Icon name={ "save" } size="small" />
      </div>
    </div>
  );
};

export default SearchInput;