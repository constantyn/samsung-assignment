import type { Model, Product } from '../types/data';
import { ChangeEvent, useMemo, useState } from 'react';
import usePreloadImages from '../hooks/use-preload-images';

type Props = { product: Product };
export default function ProductCard({ product }: Props) {
  const [selectedProductModel, selectModel] = useState<string>(
    product.modelList[0]?.modelCode,
  );

  usePreloadImages(product.modelList.map((model) => model.thumbUrl));

  const selectedModel = useMemo<Model | undefined>(
    () =>
      product.modelList.find(
        (model) => model.modelCode === selectedProductModel,
      ),
    [product, selectedProductModel],
  );

  return (
    <div className="product-card">
      <div className="product-card__header">
        <div className="product-card__product-name">
          {product.fmyMarketingName}
        </div>

        {product.modelList.length > 1 && (
          <select
            value={selectedProductModel}
            onInput={(e: ChangeEvent<HTMLSelectElement>) =>
              selectModel(e.target.value)
            }
            className="product-card__model-selector"
          >
            {product.modelList.map((model) => (
              <option value={model.modelCode} key={model.modelCode}>
                {model.fmyChipList
                  .map((chip) => chip.fmyChipLocalName)
                  .join(' - ')}
              </option>
            ))}
          </select>
        )}
      </div>

      <div
        className="product-card__body"
        style={{
          backgroundImage: `url(${selectedModel?.thumbUrl})`,
        }}
      >
        {selectedModel?.priceDisplay && (
          <div className="product-card__price">
            {selectedModel?.priceDisplay}
          </div>
        )}
      </div>
    </div>
  );
}
