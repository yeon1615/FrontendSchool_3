import React from 'react';

export default function Two({ listName, handleChangeId }) {
  return (
    <li
      style={listName === 'two' ? { color: 'red' } : { color: 'black' }}
      id='two'
      onClick={handleChangeId}
    >
      two
    </li>
  );
}
