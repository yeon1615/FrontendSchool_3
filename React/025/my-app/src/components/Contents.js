function Contents({ listName }) {
  if (listName === 'one') {
    return <div>About Lorem ipsum dolor sit amet.</div>;
  } else if (listName === 'two') {
    return <div>Product Lorem ipsum dolor sit amet.</div>;
  } else if (listName === 'three') {
    return <div>Cart Lorem ipsum dolor sit amet.</div>;
  } else if (listName === 'four') {
    return <div>Contact Lorem ipsum dolor sit amet.</div>;
  } else if (listName === 'five') {
    return <div>Contact Lorem ipsum dolor sit amet.</div>;
  }
  return <div>404 페이지를 찾을 수 없습니다.</div>;
}

export default Contents;
