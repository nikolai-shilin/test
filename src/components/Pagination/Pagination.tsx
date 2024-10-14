import { ReactNode } from 'react';
import styles from './styles.module.css';
import DropdownPagination from '../DropdownPagination/DropdownPagination';
import Icon from '../Icon/Icon';


type PaginationProps = {
  totalItems: number;
  perPage: number;
  setPerPage: (perPage: number) => void;
  perPageAll: number[];
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}


const Pagination = ({ totalItems, perPage, perPageAll, setPerPage, currentPage, setCurrentPage }: PaginationProps): ReactNode => {


  const switchPerPage = (perPage: number) => {
    setPerPage(perPage);
    setCurrentPage(0);
  }

  const nextPage = () => {
    if (currentPage + 1 > Math.ceil(totalItems / perPage)) {
      return
    }
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    if (currentPage - 1 < 0) {
      return
    }
    setCurrentPage(currentPage - 1);
  }

  const totalPages = Math.ceil(totalItems / perPage);
  const fromItem = perPage * currentPage;
  const toItem = Math.min(perPage * (currentPage + 1), totalItems);

  return (
    <div className={ styles.container }>
      <DropdownPagination
        items={ perPageAll }
        selectedItem={ perPage }
        setSelectedItem={ switchPerPage }
      />
      <div>
      </div>
      <div className={ styles.stretchedCell }>
        { `${ fromItem + 1 }–${ toItem } of ${ totalItems } items` }
      </div>
      <div>
        <DropdownPagination
          items={ Array.from({ length: totalPages }, (_, i) => i) }
          selectedItem={ currentPage }
          setSelectedItem={ setCurrentPage }
        />
      </div>
      <div>{ `of ${ totalPages } pages` }
      </div>
      <div onClick={ prevPage }>
        <Icon name="left" size="small" />
      </div>
      <div onClick={ nextPage }>
        <Icon name="right" size="small" />
      </div>
    </div>
  );
};

export default Pagination;