import {Product} from '../types';

export const ProductCard = ({product}: {product: Product}): JSX.Element => {
  return (
    <div className='card rounded-5 border d-flex align-items-center py-4'>
      <img src={product.image} alt={product.image} style={{maxHeight: 100}} />
      <div className='card-body'>
        <h5 className='card-title'>{product.vendor}</h5>
        <p className='card-text'>
          {product.title.length > 100
            ? `${product.title.substring(0, 55)}...`
            : product.title}
        </p>
        <p
          className={
            product.strikedPrice ? 'text-danger' : 'text-black fw-bold'
          }
        >
          {product.price}
          <span className='text-decoration-line-through text-secondary px-2'>
            {product.strikedPrice && product.strikedPrice}
          </span>
        </p>
        <a href='#' className='btn w-100 rounded-5 bg-green text-white'>
          VIEW DEAL
        </a>
      </div>
    </div>
  );
};
