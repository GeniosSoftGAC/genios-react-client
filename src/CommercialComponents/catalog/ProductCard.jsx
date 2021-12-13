import { Button } from 'primereact/button'
import { animate } from 'motion'
import styled from 'styled-components'

const ProductCardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  box-shadow: 0px 4px 30px 0px rgba(104, 117, 130, 0.14);
  padding: 1rem;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 5px;
  max-width: 100%;
  cursor: pointer;
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
      name: data.nombre,
      price: data.precio,
      description: data.descripcion,
      reference: data.referencia,
      category: data.categoria,
      dimensions: data.dimensiones,
    }
    const addCart = new CustomEvent('add-cart', { detail: event.detail })
    document.dispatchEvent(addCart)
  }

  return (
    <ProductCardContainer className="card-container" image={image}>
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
          onClick={onAddToCart}
        />
      </div>
    </ProductCardContainer>
  )
}

export { ProductCard }
