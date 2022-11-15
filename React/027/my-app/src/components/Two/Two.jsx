import React from 'react';
// import './two.css';
// import './two.module.css';
import styles from './two.module.css';

export default function Two() {
  return (
    <section>
      <h2>hello world Two</h2>
      <p className={styles.contents}>hello world</p>
    </section>
  );
}
