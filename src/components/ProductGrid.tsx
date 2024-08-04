import React from 'react';
import useProducts from '../hooks/use-products';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

export default function ProductGrid() {
  const { isPending, error, data } = useProducts();

  if (isPending) {
    return <div className="product-grid__loading">Loading...</div>;
  }

  if (error) {
    return (
      <div className="product-grid__loading error">Error: {error.message}</div>
    );
  }

  return (
    <div className="product-grid">
      {data.response.resultData.productList.map((product) => (
        <ProductCard key={product.familyId} product={product} />
      ))}
    </div>
  );
}
