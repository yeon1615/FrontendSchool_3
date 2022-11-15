import { useState } from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Contents from './Contents';

function Navbar() {
  const [listName, setListName] = useState('about');

  const handleChangeId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <One listName={listName} onClick={handleChangeId} />
          <Two listName={listName} onClick={handleChangeId} />
          <Three listName={listName} onClick={handleChangeId} />
          <Four listName={listName} onClick={handleChangeId} />
          <Five listName={listName} onClick={handleChangeId} />
        </ul>
      </nav>
      <Contents listName={listName} />
    </>
  );
}

export default Navbar;
