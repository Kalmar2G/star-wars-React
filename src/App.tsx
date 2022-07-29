import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { service } from './services';
import styles from './App.module.scss';
import { ThemeToggle } from './components/ThemeToggle';
import { Table } from './components/Table';
import { TableInfo } from './types';
import { Pagination } from './components/Pagination';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [tableData, setTableData] = useState<TableInfo>();
  const handleChangeTheme = async () => {
    setDarkTheme((prev) => !prev);
  };
  const handleDataUpdate = (data: TableInfo) => {
    setTableData(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  const handleChangePage = (page: string) => {
    setIsLoading(true);
    service.fetchData({ page }).then((data) => {
      if (data) {
        handleDataUpdate(data);
      }
    });
  };
  useEffect(() => {
    service.fetchData({}).then((data) => {
      if (data) {
        handleDataUpdate(data);
      }
    });
  }, []);
  return (
    <div className={classNames(styles.App, darkTheme ? styles.DarkTheme : styles.LightTheme)}>
      <h1 className={styles.Title}>star wars</h1>
      <div className={styles.ContentWrapper}>
        <Table data={tableData} isLoading={isLoading} />
        <Pagination totalPerson={tableData?.total ?? 0} onClickPage={handleChangePage} />
      </div>
      <ThemeToggle onToggleClick={handleChangeTheme} />
    </div>
  );
}

export default App;
