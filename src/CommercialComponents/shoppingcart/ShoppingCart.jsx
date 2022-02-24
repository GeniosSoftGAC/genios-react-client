import { useEffect } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { CartCard } from './CartCard'
import { useState } from 'react'
import { on, off } from '../../utils/events'
import { DataScroller } from 'primereact/datascroller'
import styled from 'styled-components'

const DatascrollerWrapper = styled(DataScroller)`
  .p-datascroller-content {
    padding: 0.2rem;
  }
  .p-datascroller-list {
    display: grid;
    gap: 0.3rem;
  }
`

const CustomSidebar = styled(Sidebar)`
  .p-sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const ShoppingCart = () => {
  const [visible, setVisible] = useState(false)
  const [total, setTotal] = useState(0)

  const [productList, setProductList] = useState([])

  if (visible) {
    document.querySelector('body').style.overflow = 'hidden'
  }

  const calcTotal = () => {
    // check if productList have items
    if (!productList.length) return

    // apply reduce function to calc all prices
    const sum = productList.reduce((previus, current) => {
      return previus + current.price
    }, 0)

    return sum
  }

  const addProduct = (event) => {
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

  const onDeleteProduct = (event) => {
    const selectedProductId = event.detail

    // creates a new array deleting the product by id
    const filteredProductList = productList.filter((product) => {
      return product.id !== selectedProductId
    })

    // set list with the new filtered array
    setProductList(filteredProductList)
  }

  // Make order event
  const makeOrder = () => {
    const orderListIds = productList.map((product) => product.id)

    console.log('Lista de Ids para orden', orderListIds)
  }

  // listening add product external event
  useEffect(() => {
    on('addProduct:click', addProduct)
    on('on-delete-product', onDeleteProduct)
    setTotal(calcTotal())

    return () => {
      off('addProduct:click', addProduct)
      off('on-delete-product', onDeleteProduct)
    }
  }, [addProduct, onDeleteProduct])

  return (
    <div>
      <Button
        icon="pi pi-shopping-cart"
        label="carrito"
        badge={productList.length}
        onClick={openCart}
      />
      <CustomSidebar
        position="right"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <h2 style={{ margin: '0', padding: '0' }}>Mi Carrito</h2>
        <span>
          <strong># Productos: </strong> {productList.length}
        </span>

        <DatascrollerWrapper
          className="data-scroller"
          value={productList}
          itemTemplate={CartCard}
          rows={5}
          inline
          scrollHeight="500px"
          emptyMessage="No hay productos en el carrito."
        />

        <p className="cart-total">
          <strong>TOTAL:</strong> ${total}
        </p>

        <Button label="Hacer Compra" onClick={makeOrder} />
      </CustomSidebar>
    </div>
  )
}

export { ShoppingCart }
