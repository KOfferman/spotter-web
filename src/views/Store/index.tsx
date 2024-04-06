import {useEffect, useState} from 'react';
import {Product, ProductResponse} from '../../shared/types';
import {fetchProducts, searchProducts} from '../../shared/data-access/products';
import {SearchBar, ProductCard, Header} from '../../shared/components';
import {debounce} from 'lodash';
import './style.css';

const ProductStore = (): JSX.Element => {
  const [products, setProducts] = useState<ProductResponse>();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      let data = undefined;
      if (searchTerm === '') {
        data = await fetchProducts(page, pageSize);
      } else {
        data = await searchProducts(searchTerm, page, pageSize);
      }
      if (data) setProducts(data);
    };
    getProducts();
  }, [pageSize]);

  // Function to handle debounced search
  const handleDebouncedSearch = debounce(async (searchTerm: string) => {
    setPage(1);
    setPageSize(12);
    const data = await searchProducts(searchTerm, page, pageSize);
    if (data) setProducts(data);
  }, 250);

  return (
    <div className='container-fluid w-100 m-0 p-0'>
      <div>
        <Header>
          <SearchBar
            handleDebouncedSearch={handleDebouncedSearch}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        </Header>
      </div>
      <div className='container flex flex-column mb-5 pb-5 pt-100-px'>
        <div className='row'>
          <h2>Results</h2>
        </div>
        <div className='row'>
          <p>
            Showing {products?.results.length} of {products?.totalResults}
          </p>
        </div>
        <div className='products-container'>
          {products?.results.map((product: Product) => {
            return (
              <div className='product-item'>
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
        {products && products.totalResults > pageSize && (
          <div className='row text-center mt-4'>
            <a
              className='text-green-cs text-decoration-none cursor'
              onClick={() => {
                setPageSize(pageSize + 12);
              }}
            >
              Show More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductStore;
