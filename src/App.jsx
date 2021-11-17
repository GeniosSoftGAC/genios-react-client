import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importar libreria de componentes PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// Importar los componentes principales
import { Home } from './MainComponents/home/Home'
import { Catalog } from './MainComponents/catalog/Catalog'
import { Checkout } from './MainComponents/checkout/Checkout'

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
