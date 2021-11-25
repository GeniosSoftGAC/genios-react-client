import { useState } from 'react'
import { Navbar } from '../../MicroComponents/Navbar'
import logo from '../../assets/logo.svg'
import { Dropdown } from 'primereact/dropdown'
import { BurnProducts } from './BurnProducts'
import { Products } from './Products'

const Catalog = () => {
  const CatalogLinks = [
    { label: 'home', route: '/', icon: 'pi pi-shopping-bag' },
    { label: 'Iniciar Sesión', route: '/', icon: 'pi pi-user' },
  ]

  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    { name: 'Muebles', code: 'M' },
    { name: 'Juguetes', code: 'M' },
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
      />
      <Dropdown
        value={selectedCategory}
        options={categories}
        onChange={onCategoryChange}
        optionLabel="name"
        placeholder="Seleccionar Categoría"
      />

      <Products productList={BurnProducts} />
    </div>
  )
}

export { Catalog }
