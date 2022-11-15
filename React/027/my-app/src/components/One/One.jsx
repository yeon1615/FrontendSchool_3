import React from 'react';
// import './one.css';
// import './one.module.css';
import styles from './one.module.css';

export default function One() {
  return (
    <section>
      <h2>hello world One</h2>
      {/* <p className='contents'>hello world</p> */}
      <p className={styles.contents}>hello world</p>
    </section>
  );
}
