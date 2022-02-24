export class ProductService {
  getProducts() {
    return fetch('http://localhost:8000/products')
      .then((response) => response.json())
      .then((data) => data)
  }
}
