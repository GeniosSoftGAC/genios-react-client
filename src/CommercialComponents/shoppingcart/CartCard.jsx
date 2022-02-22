import styled from 'styled-components'

const CartCardWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  place-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0.5rem;
  height: fit-content;
`

const CartCard = ({ product }) => {
  return (
    <CartCardWrapper>
      <h3 className="title">{product.name}</h3>
      <p>
        {' '}
        <strong>Precio :</strong> {product.price}${' '}
      </p>
    </CartCardWrapper>
  )
}

export { CartCard }
