import { useState, useEffect } from 'react'
import { Navbar } from '../../MicroComponents/Navbar'
import logo from '../../assets/logo.svg'
import { Dropdown } from 'primereact/dropdown'
import { BurnProducts } from './BurnProducts'
// import { Products } from './Products'
import { ShoppingCart } from '../shoppingcart/ShoppingCart'
import { fetchProducts } from './Managers/ProductManager'

import { on, off } from '../../utils/events'

const Catalog = () => {
  const CatalogLinks = [
    { label: 'home', route: '/', icon: 'pi pi-shopping-bag' },
    { label: 'Iniciar Sesión', route: '/login', icon: 'pi pi-user' },
  ]

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [limit, setLimit] = useState(8)

  const categories = [
    { name: 'Muebles', code: 'M' },
    { name: 'Juguetes', code: 'J' },
  ]

  const onCategoryChange = (event) => {
    setSelectedCategory(event.value)
  }

  const updateBoxes = (event) => {
    event.stopPropagation()
    setLimit(event.detail.boxes)
  }

  useEffect(() => {
    on('product:load', updateBoxes)

    return () => {
      off('product:load', updateBoxes)
    }
  }, [updateBoxes])

  return (
    <div>
      <Navbar
        logo={logo}
        brandTitle="Genios aprende jugando"
        logoSize="50px"
        links={CatalogLinks}
        additionalItem={<ShoppingCart />}
      />
      <Dropdown
        value={selectedCategory}
        options={categories}
        onChange={onCategoryChange}
        optionLabel="name"
        placeholder="Seleccionar Categoría"
      />
      {fetchProducts(limit)}
    </div>
  )
}

export { Catalog }
