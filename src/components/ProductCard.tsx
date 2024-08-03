import type { ProductModel, Product } from '../types/productApiResult';
import { ChangeEvent, useMemo, useState } from 'react';
import usePreloadImages from '../hooks/use-preload-images';

type Props = { product: Product };
export default function ProductCard({ product }: Props) {
  const [selectedProductModel, selectModel] = useState<string>(
    product.modelList[0]?.modelCode,
  );

  usePreloadImages(product.modelList.map((model) => model.thumbUrl));

  const modelOptions = useMemo<(ProductModel & { label: string })[]>(
    () =>
      product.modelList.map((model) => ({
        ...model,
        label: model.fmyChipList
          .map((chip) => chip.fmyChipLocalName)
          .join(' - '),
      })),
    [product],
  );

  const selectedModel = useMemo<ProductModel | undefined>(
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
            {modelOptions.map((model) => (
              <option value={model.modelCode} key={model.modelCode}>
                {model.label}
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
