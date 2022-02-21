import { useEffect } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { CartCard } from './CartCard'
import { useState } from 'react'
import { on, off } from '../../utils/events'

const ShoppingCart = () => {
  const [visible, setVisible] = useState(false)

  const [productList, setProductList] = useState([])

  const addProduct = (event) => {
    document.querySelector('body').style.overflow = 'hidden'

    const productData = event.detail

    // Checks if item is in list and ends function
    if (productList.some((item) => item.id === productData.id)) return

    const pushProduct = [...productList, productData]
    setProductList(pushProduct)
  }

  const openCart = () => {
    setVisible(true)
  }

  if (!visible) {
    document.querySelector('body').style.overflow = 'auto'
  }

  const renderProductList = productList.map((product) => {
    return <CartCard key={product.id} product={product} />
  })

  // listening external event
  useEffect(() => {
    on('addProduct:click', addProduct)

    return () => {
      off('addProduct:click', addProduct)
    }
  }, [openCart])

  return (
    <div>
      <Button
        icon="pi pi-shopping-cart"
        label="carrito"
        badge={productList.length}
        onClick={openCart}
      />
      <Sidebar
        position="right"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <h1>Hello im the shopping cart</h1>
        {renderProductList}
      </Sidebar>
    </div>
  )
}

export { ShoppingCart }
