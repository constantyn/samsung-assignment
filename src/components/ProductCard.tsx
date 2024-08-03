import { Product } from '../types/data';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="product-card"
      style={{ backgroundImage: `url(${product.modelList[0]?.thumbUrl})` }}
    >
      <div className="product-card__title">{product.fmyMarketingName}</div>
    </div>
  );
}
