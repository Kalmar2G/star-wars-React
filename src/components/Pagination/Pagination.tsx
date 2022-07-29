import React, { useEffect, useState } from 'react';
import { SearchParams } from 'types';
import style from './Pagination.module.scss';

interface PaginationProps {
    totalPerson: number;
    onClickPage: (params: SearchParams) => void;
}

export const Pagination = ({ totalPerson, onClickPage }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageNumbers = Math.ceil(totalPerson / 10);
  const pages = Array.from('x'.repeat(pageNumbers));
  const handleClickPage = (index: number) => {
    setCurrentPage(index);
    onClickPage({ page: String(index + 1) });
  };
  useEffect(() => {
    setCurrentPage(0);
  }, [totalPerson]);
  return (
    <div className={style.Pagination}>
      <span>
        total:
        {totalPerson}
      </span>
      <div>
        {pages?.map((_, index) => (
          <button
            key={index}
            disabled={index === currentPage}
            className={currentPage === index ? style.HighlightButton : ''}
            type="button"
            onClick={() => handleClickPage(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
