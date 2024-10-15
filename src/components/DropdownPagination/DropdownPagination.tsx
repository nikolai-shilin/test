import { ReactNode } from 'react';
import styles from './styles.module.css';
import Icon from '../Icon/Icon';


type DropdownPaginationProps = {
  items: number[];
  selectedItem: number;
  setSelectedItem: (item: number) => void;
  plusOneCorrection: 0 | 1;
}

const DropdownPagination = ({ items, selectedItem, setSelectedItem, plusOneCorrection }: DropdownPaginationProps): ReactNode => {

  return (
    <>
      <div className={ styles.dropdown } >
        <span className={styles.selectedName}>
          { selectedItem + plusOneCorrection }
          <Icon name={ "down" } size="small" />
        </span>
        <ul className={ styles.dropdownContent }>
          { items.map((item, index) => (
            <li
              key={ index }
              className={ styles.dropdownContentItem }
              onClick={ () => setSelectedItem(item) }
            >
              { item  + plusOneCorrection }
            </li>
          )) }
        </ul>
      </div>
    </>
  );
};

export default DropdownPagination;