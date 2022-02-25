import { ProductCard } from './ProductCard'
import { Dialog } from 'primereact/dialog'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { off, on } from '../../utils/events'
import { Image } from 'primereact/image'

const ProductGrid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
`

const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const DetailTemplate = ({ product }) => {
  return (
    <ProductDetailWrapper>
      {/* <div
        style={{
          backgroundImage: `url(${product.foto})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '150px',
          height: '150px',
        }}
        className="product-detail-image"
      ></div> */}

      <Image src={product.foto} width="200" preview />

      <div className="product-detail-info">
        <h3>{product.nombre}</h3>
        <p>
          <strong>Descripción:</strong> {product.descripcion}
        </p>
        <p>
          {' '}
          <strong>Categoría:</strong> {product.categoria}
        </p>
        <p>
          <strong>Referencia: </strong> {product.referencia}
        </p>
        <p>${product.precio}</p>
      </div>
    </ProductDetailWrapper>
  )
}

const Products = ({ productList }) => {
  const [productDetail, setProductDetail] = useState({})
  const [showDetailDialog, setShowDetailDialog] = useState(false)

  const openDetail = (event) => {
    setShowDetailDialog(true)
    setProductDetail(
      productList.filter((product) => product.id === event.detail)[0]
    )
  }

  useEffect(() => {
    on('productDetail:click', openDetail)

    return () => {
      off('productDetail:click', openDetail)
    }
  }, [openDetail])

  const renderProducts = (productItems) => {
    return productItems.map((product) => {
      return (
        <ProductCard
          key={product.id}
          name={product.nombre}
          price={product.precio}
          image={product.foto}
          data={product}
        />
      )
    })
  }

  return (
    <>
      <ProductGrid className="product-grid">
        {renderProducts(productList)}
      </ProductGrid>
      <Dialog
        style={{ width: '35vw', minWidth: '300px' }}
        header="Detalle de producto"
        visible={showDetailDialog}
        draggable={false}
        dismissableMask={true}
        modal
        onHide={() => setShowDetailDialog(false)}
      >
        <DetailTemplate product={productDetail} />
      </Dialog>
    </>
  )
}

export { Products }
