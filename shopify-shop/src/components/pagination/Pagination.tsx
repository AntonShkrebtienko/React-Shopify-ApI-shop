import React from 'react';
import './pagination.css'

interface PaginationProps {
    productsPerPage: number,
    totalProducts: number,
    setCurrentPage: (arg0: number) => number
}

const Pagination: React.FC<PaginationProps> = (props) => {
    const {totalProducts, productsPerPage, setCurrentPage} = props

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className='pagination-nav'>
        <ul className="pagination-nav__list">
            {pageNumbers.map(pageNumber => {
               return <li key={pageNumber} className='page-item'>
                    <a href="!#" className='page-link'
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(pageNumber)
                        }}>
                        {pageNumber}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  );
};

export default Pagination;
