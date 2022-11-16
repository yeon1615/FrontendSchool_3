export default function ProductInfo(props) {
  return (
    <li>
      <img
        src={'http://test.api.weniv.co.kr/' + props.item['thumbnailImg']}
        alt=''
      />
      <p>{props.item['productName']}</p>
      <p>하트</p>
      <p>{props.item['price']}</p>
    </li>
  );
}
