type Chip =
  | {
      fmyChipType: 'COLOR';
      fmyChipLocalName: string;
      fmyChipCode: string;
    }
  | {
      fmyChipType: 'MOBILE MEMORY';
      fmyChipLocalName: string;
    };

type Model = {
  modelCode: string;
  displayName: string;
  thumbUrl: string;
  largeUrl: string;
  priceDisplay: string;
  fmyChipList: Chip[];
};

export type Product = {
  familyId: string;
  fmyMarketingName: string;
  modelList: Model[];
};

export type Data = {
  statusCode: number;
  statusMessage: string;
  resultData: { productList: Product[] };
};
