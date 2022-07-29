import React from 'react';
import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps {
    onToggleClick: () => void
}

export const ThemeToggle = ({ onToggleClick }: ThemeToggleProps) => (
  <div className={styles.ThemeToggle} onClick={onToggleClick}>
    <span className={styles.Egg}>это пасхалочка</span>
  </div>
);
