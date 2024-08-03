import React from 'react';
import { Data } from '../types/data';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

const MODELS = [
  'SM-F741BLBGEUB',
  'SM-F741BLBHEUB',
  'SM-F741BLGGEUB',
  'SM-F741BLGHEUB',
  'SM-F741BZSGEUB',
  'SM-F741BZSHEUB',
  'SM-F741BZYGEUB',
  'SM-F741BZYHEUB',
  'SM-F741BAKGEUB',
  'SM-F741BAKHEUB',
  'SM-F741BZWGEUB',
  'SM-F741BZWHEUB',
  'SM-F741BZOGEUB',
  'SM-F741BZOHEUB',
  'SM-F956BDBBEUB',
  'SM-F956BDBCEUB',
  'SM-F956BDBNEUB',
  'SM-F956BLIBEUB',
  'SM-F956BLICEUB',
  'SM-F956BLINEUB',
  'SM-F956BZSBEUB',
  'SM-F956BZSCEUB',
  'SM-F956BZSNEUB',
  'SM-F956BAKBEUB',
  'SM-F956BAKCEUB',
  'SM-F956BAKNEUB',
  'SM-F956BZWBEUB',
  'SM-F956BZWCEUB',
  'SM-F956BZWNEUB',
  'SM-L705FZTAEUB',
  'SM-L705FZWAEUB',
  'SM-L705FDAAEUB',
  'ET-SNL70MOEGEU',
  'ET-SNL70MBEGEU',
  'ET-SNL70MKEGEU',
  'ET-SNL70MWEGEU',
  'SM-X710NZAAEUB',
  'SM-X710NZAEEUB',
  'SM-X710NZEAEUB',
  'SM-X710NZEEEUB',
  'SM-X716BZAAEUB',
  'SM-X716BZAEEUB',
  'SM-X810NZAAEUB',
  'SM-X810NZAEEUB',
  'SM-X810NZEAEUB',
  'SM-X810NZEEEUB',
  'SM-X816BZAAEUB',
  'SM-X816BZAEEUB',
  'SM-X910NZAAEUB',
  'SM-X910NZAEEUB',
  'SM-X910NZAIEUB',
  'SM-X910NZEAEUB',
  'SM-X910NZEEEUB',
  'SM-X916BZAAEUB',
  'SM-X916BZAEEUB',
  'SM-X916BZAIEUB',
  'NP940XMA-KB1NL',
  'NP960XMA-KB1NL',
  'NP960XMB-KB1NL',
  'QE65LS03DAUXXN',
  'QE32LS03CBUXXN',
  'QE65LS03BGUXXN',
  'QE32LS03BBUXXN',
  'QE55QE1DAUXXN',
  'QE65QNX1DATXXN',
  'QE65QN900DTXXN',
  'QE65QN800DTXXN',
  'QE55Q72DATXXN',
  'QE55QN88DBTXXN',
];
const PRODUCTS_URL = `https://searchapi.samsung.com/v6/front/b2c/product/card/detail/newhybris?siteCode=nl&modelList=${MODELS.join(',')}&commonCodeYN=N&saleSkuYN=N&onlyRequestSkuYN=Y&keySummaryYN=N&shopSiteCode=nl`;

export default function ProductGrid() {
  const { isPending, data, error } = useQuery<{ response: Data }>({
    queryKey: ['products'],
    queryFn: () => fetch(PRODUCTS_URL).then((res) => res.json()),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="product-grid">
      {data.response.resultData.productList.map((product) => (
        <ProductCard key={product.familyId} product={product} />
      ))}
    </div>
  );
}
