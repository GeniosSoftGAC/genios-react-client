import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { useState } from 'react'

const ShoppingCart = () => {
  const [visible, setVisible] = useState(false)

  const listenAdded = () => {
    document.addEventListener('add-cart', (event) => {
      event.stopImmediatePropagation()
      console.log(event.detail)
    })
  }

  listenAdded()

  return (
    <div>
      <Button
        icon="pi pi-shopping-cart"
        className="p-button-rounded"
        onClick={() => setVisible(true)}
      />
      <Sidebar
        position="right"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <h1>Hello im the shopping cart</h1>
      </Sidebar>
    </div>
  )
}

export { ShoppingCart }
