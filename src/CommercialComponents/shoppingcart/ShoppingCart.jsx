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
    /*
    TODO: Add a new key for each product counting the quantity of each one. 
    */
    if (productList.some((item) => item.id === productData.id)) return

    const pushProduct = [...productList, productData]
    setProductList(pushProduct)
  }

  const openCart = () => {
    setVisible(true)
    document.querySelector('body').style.overflow = 'hidden'
  }

  if (!visible) {
    document.querySelector('body').style.overflow = 'auto'
  }

  const renderProductList = productList.map((product) => {
    return <CartCard key={product.id} product={product} />
  })

  // listening add product external event
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
        <h1>Mi Carrito</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            height: '650px',
            overflow: 'auto',
            padding: '0.2rem',
            alignContent: 'center',
          }}
          className="cart-list"
        >
          {renderProductList}
        </div>
      </Sidebar>
    </div>
  )
}

export { ShoppingCart }
