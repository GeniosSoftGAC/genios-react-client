import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importar libreria de componentes PrimeReact

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// Importar los componentes comerciales

import { Home } from './CommercialComponents/home/Home'
import { Catalog } from './CommercialComponents/catalog/Catalog'
import { Checkout } from './CommercialComponents/checkout/Checkout'

// Importar los componentes de administración

import { LoginComponent } from './AdminComponents/Login/LoginComponent'
import { ProductAdmin } from './AdminComponents/ProductAdmin/ProductAdmin'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/product-admin" element={<ProductAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
