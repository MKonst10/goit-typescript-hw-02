export type Url = {
  small: string;
  regular: string;
};

export type Image = {
  id: number;
  alt_description: string;
  urls: Url;
};

export type Fetch = {
  results: Image[];
  total_pages: number;
  total: number;
};
