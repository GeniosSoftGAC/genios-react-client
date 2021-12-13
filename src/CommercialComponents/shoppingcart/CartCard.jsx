const CartCard = ({ data }) => {
  return (
    <div>
      <h1>This is a cart card</h1>
      {data.detail}
    </div>
  )
}

export { CartCard }
