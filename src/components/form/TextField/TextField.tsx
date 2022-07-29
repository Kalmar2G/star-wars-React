import React from 'react';
import { SearchParams } from 'types';
import searchIcon from './search-icon.png';
import styles from './TextField.module.scss';

interface TextFieldProps {
    nameFilter: string;
    setNameFilter: React.Dispatch<React.SetStateAction<string>>;
    handleFetchData: ({ page, search }: SearchParams) => void;
}

export const TextField = ({ nameFilter, setNameFilter, handleFetchData }: TextFieldProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFetchData({ page: '1', search: nameFilter });
  };
  return (
    <form
      className={styles.Wrapper}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        className={styles.TextField}
        placeholder="Name filter"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <button
        type="button"
        onClick={() => handleFetchData({ page: '1', search: nameFilter })}
        className={styles.SearchButton}
      >
        <img src={searchIcon} alt="f" />
      </button>
    </form>
  );
};
