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

  const categories = [
    { name: 'Muebles', code: 'M' },
    { name: 'Juguetes', code: 'J' },
  ]

  const onCategoryChange = (event) => {
    setSelectedCategory(event.value)
  }

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
        style={{ margin: '1rem' }}
        value={selectedCategory}
        options={categories}
        onChange={onCategoryChange}
        optionLabel="name"
        placeholder="Seleccionar Categoría"
      />
      {fetchProducts(12)}
    </div>
  )
}

export { Catalog }
