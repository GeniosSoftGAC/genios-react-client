import { useEffect } from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { trigger } from '../../utils/events'

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

  useEffect(() => {
    const productGrid = document.querySelector('.product-grid')
    const columns = getComputedStyle(productGrid)
      .getPropertyValue('grid-template-columns')
      .split(' ').length
    const rows = getComputedStyle(productGrid)
      .getPropertyValue('grid-template-rows')
      .split(' ').length

    let boxes = 8
    if (columns === 1) {
      boxes = 2
    } else {
      boxes = columns * rows
    }

    window.addEventListener('load', () => {
      trigger('product:load', { boxes: boxes })
    })
  }, [renderProducts])

  return (
    <ProductGrid className="product-grid">
      {renderProducts(productList)}
    </ProductGrid>
  )
}

export { Products }
