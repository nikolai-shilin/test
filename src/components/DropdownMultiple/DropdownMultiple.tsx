import { ReactNode } from 'react';
import styles from './styles.module.css';
import Icon from '../Icon/Icon';


type DropdownMultipleProps = {
  name: string;
  items: string[];
  selectedItems: string[];
  switchSelectedItem: (item: string) => void;
}

const DropdownMultiple = ({ name, items, selectedItems, switchSelectedItem }: DropdownMultipleProps): ReactNode => {

  return (
    <>
      <div className={ styles.dropdownMultiple } >
        <span className={styles.name}>
          { name }
          <Icon name={ "down" } size="small" />
        </span>
        <ul className={ styles.dropdownMultipleContent }>
          { items.map((item, index) => (
            <li
              key={ index }
              className={ styles.dropdownMultipleContentItem }
              onClick={() => switchSelectedItem(item)}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                className={styles.checkbox}
                onChange={() => switchSelectedItem(item)}
              />
              { item }
            </li>
          )) }
        </ul>
      </div>
    </>
  );
};

export default DropdownMultiple;