import React from 'react';

export default function Three({ listName, handleChangeId }) {
  return (
    <li
      style={listName === 'three' ? { color: 'red' } : { color: 'black' }}
      id='three'
      onClick={handleChangeId}
    >
      three
    </li>
  );
}
