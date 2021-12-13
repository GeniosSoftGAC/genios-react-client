import { ProductCard } from './ProductCard'
import styled from 'styled-components'

const ProductGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
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
