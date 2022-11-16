import { productData } from '../data/data.js';
import ProductInfo from './components/ProductInfo.js';

export default function ProductList() {
  return (
    <ul>
      {productData
        .filter((i) => i.price <= 10000)
        .map((i) => (
          <ProductInfo item={i} key={i.id} />
        ))}
    </ul>
  );
}
