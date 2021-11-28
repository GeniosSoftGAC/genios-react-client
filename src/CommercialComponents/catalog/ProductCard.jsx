import styled from 'styled-components'

const ProductCardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  box-shadow: 0px 4px 30px 0px rgba(104, 117, 130, 0.14);
  padding: 1rem;
  border: 1px solid rgba(227, 227, 227, 1);
  border-radius: 5px;
  max-width: 100%;

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

const ProductCard = ({ name, price, image, id }) => {
  const onCardClick = (event) => {
    event.detail = {
      id: id,
      name: name,
      price: price,
    }
    console.log(event.detail)
  }

  return (
    <ProductCardContainer onClick={onCardClick} image={image}>
      <div className="product-card__image"></div>
      <div className="product-info">
        <div>
          <h2 className="product-name">{name}</h2>
          <p className="product-price">
            <strong>price:</strong>
            {price}
          </p>
        </div>
        <div className="shopping-add" id="id">
          <i className="fa fa-cart-plus"></i>
        </div>
      </div>
    </ProductCardContainer>
  )
}

export { ProductCard }
