import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importar libreria de componentes PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// Importar los componentes principales
import { Home } from './CommercialComponents/home/Home'
import { Catalog } from './CommercialComponents/catalog/Catalog'
import { Checkout } from './CommercialComponents/checkout/Checkout'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
