import { ProductCard } from './ProductCard'
import styled from 'styled-components'

const ProductGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;

  /* .product-card__container {
    display: grid;
    grid-gap: 1rem;
    box-shadow: 0px 4px 30px 0px rgba(104, 117, 130, 0.14);
    padding: 1rem;
    border: 1px solid rgba(227, 227, 227, 1);
    border-radius: 5px;
    max-width: 100%;

    .product-card__image {
      background-image: url(${(props) => props.image});
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
  } */
`

const Products = ({ productList }) => {
  const renderProducts = (productItems) => {
    return productItems.map((product, id) => {
      return (
        <ProductCard
          key={id}
          name={product.nombre}
          price={product.precio}
          image={product.foto}
          data={product}
        />
      )
    })
  }
  return <ProductGrid>{renderProducts(productList)}</ProductGrid>
}

export { Products }
