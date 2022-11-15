import { useState } from 'react';
import Navbar from './components/Navbar';

// function Contents({ listName }) {
//   if (listName === 'about') {
//     return <div>About Lorem ipsum dolor sit amet.</div>;
//   } else if (listName === 'product') {
//     return <div>Product Lorem ipsum dolor sit amet.</div>;
//   } else if (listName === 'cart') {
//     return <div>Cart Lorem ipsum dolor sit amet.</div>;
//   } else if (listName === 'contact') {
//     return <div>Contact Lorem ipsum dolor sit amet.</div>;
//   }
//   return <div>404 페이지를 찾을 수 없습니다.</div>;
// }

// function Navbar() {
//   const [listName, setListName] = useState('about');

//   const handleChangeId = (e) => {
//     setListName(e.target.id);
//   };

//   return (
//     <>
//       <nav>
//         <ul>
//           <li
//             style={listName === 'about' ? { color: 'red' } : { color: 'black' }}
//             id='about'
//             onClick={handleChangeId}
//           >
//             About
//           </li>
//           <li
//             style={
//               listName === 'product' ? { color: 'red' } : { color: 'black' }
//             }
//             id='product'
//             onClick={handleChangeId}
//           >
//             Product
//           </li>
//           <li
//             style={listName === 'cart' ? { color: 'red' } : { color: 'black' }}
//             id='cart'
//             onClick={handleChangeId}
//           >
//             Cart
//           </li>
//           <li
//             style={
//               listName === 'contact' ? { color: 'red' } : { color: 'black' }
//             }
//             id='contact'
//             onClick={handleChangeId}
//           >
//             Contact
//           </li>
//         </ul>
//       </nav>
//       <Contents listName={listName} />
//     </>
//   );
// }

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
