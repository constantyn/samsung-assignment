type ProductModelChip =
  | {
      fmyChipType: 'COLOR';
      fmyChipLocalName: string;
      fmyChipCode: string;
    }
  | {
      fmyChipType: 'MOBILE MEMORY';
      fmyChipLocalName: string;
    };

export type ProductModel = {
  modelCode: string;
  displayName: string;
  thumbUrl: string;
  priceDisplay: string | null;
  fmyChipList: ProductModelChip[];
  pdpUrl: string;
};

export type Product = {
  familyId: string;
  fmyMarketingName: string;
  modelList: ProductModel[];
};

export type ProductApiResult = {
  statusCode: number;
  statusMessage: string;
  resultData: { productList: Product[] };
};
