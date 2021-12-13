import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { CartCard } from './CartCard'
import { useState } from 'react'

const ShoppingCart = () => {
  const [visible, setVisible] = useState(false)

  const listenAdded = () => {
    document.addEventListener('add-cart', (event) => {
      event.stopImmediatePropagation()
      console.log(event.detail)
    })
  }

  if (!visible) {
    document.querySelector('body').style.overflow = 'auto'
  }
  const openCart = (event) => {
    event.stopPropagation
    document.querySelector('body').style.overflow = 'hidden'
    setVisible(true)
  }

  listenAdded()

  return (
    <div>
      <Button
        icon="pi pi-shopping-cart"
        label="carrito"
        badge="8"
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
