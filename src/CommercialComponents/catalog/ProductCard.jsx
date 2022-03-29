import { Button } from 'primereact/button'
import { animate } from 'motion'
import { trigger } from '../../utils/events'
import styled from 'styled-components'

const ProductCardContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1rem;
  box-shadow: 0px 4px 30px 0px rgba(104, 117, 130, 0.14);
  padding: 1rem;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 5px;
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 350px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
    border: 1px solid lightgray;
  }

  .product-card__image {
    background-image: url('${(props) => props.image}');
    height: 180px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-review {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .product-name {
    font-size: 1rem;
  }
  .p-button {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
  .p-button.p-button-icon-only {
    padding: 0;
  }
`

const ProductCard = ({ name, price, image, data }) => {
  const onAddToCart = (event) => {
    event.stopPropagation()

    // set animation
    const addButton = event.target.closest('.add-cart')
    animate(
      addButton,
      { transform: ['scale(1.1)', 'scale(1)'] },
      { duration: 0.4 }
    )
    //-----

    event.detail = {
      id: data.id,
      image: data.foto,
      name: data.nombre,
      price: data.precio,
      description: data.descripcion,
      reference: data.referencia,
      category: data.categoria,
      dimensions: data.dimensiones,
    }

    trigger('addProduct:click', event.detail)
  }

  const onCardDetail = (event) => {
    event.detail = data.id
    trigger('productDetail:click', event.detail)
  }

  return (
    <ProductCardContainer
      onClick={onCardDetail}
      className="card-container"
      image={image}
    >
      <div className="product-card__image"></div>
      <div className="product-info">
        <div>
          <h2 className="product-name">{name}</h2>
          <p className="product-price">
            <strong>Price: </strong>
            {price}
          </p>
        </div>
        <Button
          icon="pi pi-plus"
          className="add-cart p-button-rounded"
          tooltip="Agregar producto al carrito"
          onClick={onAddToCart}
        />
      </div>
    </ProductCardContainer>
  )
}

export { ProductCard }
