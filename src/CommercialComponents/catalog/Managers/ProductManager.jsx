import { useState, useEffect } from 'react'
import { Products } from '../Products'
import { Paginator } from 'primereact/paginator'
import variables from '../../../environment/const'

const fetchProducts = (limit) => {
  const productLimit = limit || 6

  const [basicFirst, setBasicFirst] = useState(0)

  const onPageChange = (event) => {
    setBasicFirst(event.first)
  }

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])

  console.log('Product list ', products)

  useEffect(() => {
    fetch(`${variables.API_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true)
        setProducts(data)
      }),
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
  }, [])

  if (error) {
    console.error(error.message)
  } else if (!isLoaded) {
    return <h1>Loading products...</h1>
  } else {
    const productList = products.slice(basicFirst, basicFirst + productLimit)
    return (
      <div>
        <Products productList={productList} />
        <Paginator
          first={basicFirst}
          rows={productLimit}
          totalRecords={products.length}
          onPageChange={onPageChange}
        ></Paginator>
      </div>
    )
  }
}

export { fetchProducts }
