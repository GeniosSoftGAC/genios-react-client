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
    event.stopPropagation
    document.querySelector('body').style.overflow = 'hidden'

    const productData = event.detail

    const pushProduct = [...productList, productData]
    setProductList(pushProduct)
  }

  const openCart = () => {
    setVisible(true)
  }

  // listening external event
  useEffect(() => {
    on('addProduct:click', addProduct)

    return () => {
      off('addProduct:click', addProduct)
    }
  }, [openCart])

  if (!visible) {
    document.querySelector('body').style.overflow = 'auto'
  }

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
        <CartCard data={{ detail: 'props works' }} />
      </Sidebar>
    </div>
  )
}

export { ShoppingCart }
