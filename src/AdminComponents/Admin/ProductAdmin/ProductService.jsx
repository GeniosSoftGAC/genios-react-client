import variables from '../../../environment/const'

const apiUrl = variables.API_URL
export class ProductService {
  getProducts() {
    return fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => data)
  }

  deleteProduct(id) {
    return fetch(`${apiUrl}/products/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => data)
  }

  postNewProduct(product) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const bodyContent = JSON.stringify(product)

    return fetch(`${apiUrl}/products/`, {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.text())
      .then((data) => data)
  }

  updateProduct(product, id) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const bodyContent = JSON.stringify(product)
    console.log('update--->', bodyContent)

    return fetch(`${apiUrl}/products/${id}`, {
      method: 'PUT',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.text())
      .then((data) => data)
  }
}
