import React, {
  useEffect, useReducer, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { ThemeToggle } from 'components/ThemeToggle';
import { Pagination } from 'components/Pagination';
import { Table } from 'components/Table';
import { service } from './services';
import styles from './App.module.scss';
import { SearchParams, TableInfo } from './types';

function App() {
  const ref = useRef(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, toggleTheme] = useReducer((prev) => !prev, true);
  const [nameFilter, setNameFilter] = useState('');
  const [tableData, setTableData] = useState<TableInfo>();

  const handleFetchData = async ({ page }: SearchParams) => {
    setIsLoading(true);
    const data = await service.fetchData({ page, search: nameFilter });
    if (data) {
      setTableData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };
  useEffect(() => {
    // fix react 18 strict mode double mount component
    if (ref.current) {
      handleFetchData({ page: '1' });
    }
    ref.current = false;
  }, []);

  return (
    <div className={classNames(styles.App, theme ? styles.DarkTheme : styles.LightTheme)}>
      <h1 className={styles.Title}>star wars</h1>
      <div className={styles.ContentWrapper}>
        <Table
          data={tableData}
          isLoading={isLoading}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          handleFetchData={handleFetchData}
        />
        <Pagination
          totalPerson={tableData?.total ?? 0}
          onClickPage={handleFetchData}
        />
      </div>
      <ThemeToggle onToggleClick={() => toggleTheme()} />
    </div>
  );
}

export default App;
