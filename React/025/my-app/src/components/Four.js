import React from 'react';

export default function Four({ listName, handleChangeId }) {
  return (
    <li
      style={listName === 'four' ? { color: 'red' } : { color: 'black' }}
      id='four'
      onClick={handleChangeId}
    >
      four
    </li>
  );
}
