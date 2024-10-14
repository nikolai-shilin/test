import { ReactNode } from 'react';
import styles from './styles.module.css';
import Icon from '../Icon/Icon';


type DropdownProps = {
  items: string[];
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Dropdown = ({ items, selectedItem, setSelectedItem }: DropdownProps): ReactNode => {

  return (
    <>
      <div className={ styles.dropdown } >
        <span className={styles.selectedName}>
          { selectedItem }
          <Icon name={ "down" } size="small" />
        </span>
        <ul className={ styles.dropdownContent }>
          { items.map((item, index) => (
            <li
              key={ index }
              className={ styles.dropdownContentItem }
              onClick={ () => setSelectedItem(item) }
            >
              { item }
            </li>
          )) }
        </ul>
      </div>
    </>
  );
};

export default Dropdown;