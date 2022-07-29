import React, { useState } from 'react';
import style from './Pagination.module.scss';

interface PaginationProps {
    totalPerson: number;
    onClickPage: (page: string) => void;
}

export const Pagination = ({ totalPerson, onClickPage }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageNumbers = Math.ceil(totalPerson / 10);
  const pages = Array.from('x'.repeat(pageNumbers));
  const handleClickPage = (index: number) => {
    setCurrentPage(index);
    onClickPage(String(index + 1));
  };
  return (
    <div className={style.Pagination}>
      <span>
        total:
        {totalPerson}
      </span>
      <div>
        {pages?.map((_, index) => <button className={currentPage === index ? style.HighlightButton : ''} type="button" onClick={() => handleClickPage(index)}>{index + 1}</button>)}
      </div>
    </div>
  );
};
