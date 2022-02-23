import { Button } from 'primereact/button'
import styled from 'styled-components'
import { trigger } from '../../utils/events'

const CartCardWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  place-items: center;
  padding: 0.5rem;

  & * {
    margin: 0;
    padding: 0;
  }

  .product-detail {
    position: relative;
    display: grid;
    gap: 0.5rem;

    &-header,
    &-footer {
      display: flex;
      place-items: center;
    }

    &-footer {
      gap: 0.5rem;

      i {
        cursor: pointer;
        color: var(--pink-500);
        transition: color 0.3s ease-in-out;
        &:hover {
          color: var(--pink-800);
        }
      }
    }
  }

  .product-category {
    display: flex;
    place-items: center;
    gap: 1rem;
  }
`

const CartCard = (product) => {
  const onDelete = () => {
    trigger('on-delete-product')
  }

  return (
    <CartCardWrapper className="product-item">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'contain',
          width: '100px',
          height: '100px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="product-detail">
        <section className="product-detail-header">
          <strong>{product.name}</strong>
        </section>
        {/* <Rating value={data.rating} readOnly cancel={false}></Rating> */}
        <div className="product-category">
          <i className="pi pi-tag product-category-icon"></i>
          <p className="product-category-text">{product.category}</p>
        </div>
        <div className="product-detail-footer">
          <p className="product-price">$ {product.price}</p>
          <i className="pi pi-trash" onClick={onDelete}></i>
        </div>
      </div>
    </CartCardWrapper>
  )
}

export { CartCard }
