export interface Product {
  image: string;
  title: string;
  price: string;
  strikedPrice: string;
  vendor: string;
}

export interface ProductResponse {
  page: number;
  pageSize: number;
  totalResults: number;
  totalPages: number;
  results: Product[];
}
