const CartCard = ({ product }) => {
  console.log(product.name)
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
