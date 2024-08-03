enum FmyChipType {
  'COLOR',
  'MOBILE MEMORY',
}

type ChipOptionListItem = {
  optionCode: string;
  optionLocalName: string;
};

type ChipOption = {
  fmyChipType: keyof FmyChipType;
  optionList: ChipOptionListItem[];
};

type Model = {
  modelCode: string;
  displayName: string;
  thumbUrl: string;
  largeUrl: string;
  priceDisplay: string;
};

export type Product = {
  familyId: string;
  fmyMarketingName: string;
  chipOptions: ChipOption[];
  modelList: Model[];
};

export type Data = {
  statusCode: number;
  statusMessage: string;
  resultData: { productList: Product[] };
};
