import { Product } from '../types/data';
import { ChangeEvent, useState } from 'react';
import usePreloadImages from '../hooks/use-preload-images';

type Props = { product: Product };
export default function ProductCard({ product }: Props) {
  const [selectedProductModel, selectModel] = useState<string>(
    product.modelList[0]?.modelCode,
  );

  usePreloadImages(product.modelList.map((model) => model.thumbUrl));

  return (
    <div
      className="product-card"
      style={{
        backgroundImage: `url(${product.modelList.find((model) => model.modelCode === selectedProductModel)?.thumbUrl})`,
      }}
    >
      <select
        value={selectedProductModel}
        onInput={(e: ChangeEvent<HTMLSelectElement>) =>
          selectModel(e.target.value)
        }
        className="product-card__model-selector"
      >
        {product.modelList.map((model) => (
          <option value={model.modelCode} key={model.modelCode}>
            {product.fmyMarketingName +
              ': ' +
              model.fmyChipList
                .map((chip) => chip.fmyChipLocalName)
                .join(' - ')}
          </option>
        ))}
      </select>
    </div>
  );
}
