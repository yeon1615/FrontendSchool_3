import React from 'react';

export default function Five({ listName, handleChangeId }) {
  return (
    <li
      style={listName === 'five' ? { color: 'red' } : { color: 'black' }}
      id='five'
      onClick={handleChangeId}
    >
      five
    </li>
  );
}
