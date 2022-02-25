export class ProductService {
  getProducts() {
    return fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => data)
  }

  postNewProduct(product) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const bodyContent = JSON.stringify(product)

    return fetch('http://localhost:8000/products/', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.text())
      .then((data) => data)
  }
}
