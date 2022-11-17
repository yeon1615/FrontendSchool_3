import { useState } from 'react';
import styles from './IconHeart.module.css';

function IconHeart() {
  const [clicked, setClicked] = useState(false);
  function checkedClicked() {
    setClicked(!clicked);
  }
  return (
    <>
      <button
        onClick={checkedClicked}
        className={clicked === false ? styles.likeBtnOn : styles.likeBtnOff}
      ></button>
    </>
  );
}

export default IconHeart;
