import React from 'react';

export default function One({ listName, handleChangeId }) {
  return (
    <li
      style={listName === 'one' ? { color: 'red' } : { color: 'black' }}
      id='one'
      onClick={handleChangeId}
    >
      One
    </li>
  );
}
