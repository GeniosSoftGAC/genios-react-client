import { useState, useEffect } from 'react'
import { Products } from '../Products'
import { Paginator } from 'primereact/paginator'

const fetchProducts = () => {
  const [basicFirst, setBasicFirst] = useState(0)

  const onPageChange = (event) => {
    console.log(event)
    setBasicFirst(event.first)
  }

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products')
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true)
        setProducts(data)
        console.log(data)
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
    const productList = products.slice(basicFirst, basicFirst + 6)
    return (
      <div>
        <Products productList={productList} />
        <Paginator
          first={basicFirst}
          rows={6}
          totalRecords={products.length}
          onPageChange={onPageChange}
        ></Paginator>
      </div>
    )
  }
}

export { fetchProducts }
