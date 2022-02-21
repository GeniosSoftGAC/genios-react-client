const CartCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        {' '}
        <strong>precio</strong> {product.price}{' '}
      </p>
    </div>
  )
}

export { CartCard }
