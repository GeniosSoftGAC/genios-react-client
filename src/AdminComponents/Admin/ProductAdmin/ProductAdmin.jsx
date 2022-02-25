import React, { useState, useEffect, useRef } from 'react'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ProductService } from './ProductService'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
// import { FileUpload } from 'primereact/fileupload'
// import { Rating } from 'primereact/rating'
import { Toolbar } from 'primereact/toolbar'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton } from 'primereact/radiobutton'
import { InputNumber } from 'primereact/inputnumber'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import './ProductAdminStyles.css'

const ProductAdmin = () => {
  let emptyProduct = {
    nombre: '',
    foto: '',
    descripcion: '',
    categoria: null,
    precio: 0,
    dimensiones: '',
    referencia: '',
    // cantidad: 0,
    // rating: 0,
    // inventoryStatus: 'INSTOCK',
  }

  const [products, setProducts] = useState(null)
  const [productDialog, setProductDialog] = useState(false)
  const [deleteProductDialog, setDeleteProductDialog] = useState(false)
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false)
  const [product, setProduct] = useState(emptyProduct)
  const [selectedProducts, setSelectedProducts] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [globalFilter, setGlobalFilter] = useState(null)
  const toast = useRef(null)
  const dt = useRef(null)
  const productService = new ProductService()

  const refreshProducts = () => {
    productService.getProducts().then((data) => {
      setProducts(data)
    })
  }

  useEffect(() => {
    refreshProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // const formatCurrency = (value) => {
  //   return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  // }

  const openNew = () => {
    setProduct(emptyProduct)
    setSubmitted(false)
    setProductDialog(true)
  }

  const hideDialog = () => {
    setSubmitted(false)
    setProductDialog(false)
  }

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false)
  }

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false)
  }

  const saveProduct = () => {
    setSubmitted(true)

    if (product.nombre.trim()) {
      let _products = [...products]
      let _product = { ...product }
      if (product.id) {
        const index = findIndexById(product.id)

        _products[index] = _product
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        })
      } else {
        _products.push(_product)
        productService.postNewProduct(_product)
        toast.current.show({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        })
      }

      refreshProducts()
      setProductDialog(false)
      setProduct(emptyProduct)
    }
  }

  const editProduct = (product) => {
    setProduct({ ...product })
    setProductDialog(true)
  }

  const confirmDeleteProduct = (product) => {
    setProduct(product)
    setDeleteProductDialog(true)
  }

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id)
    setProducts(_products)
    setDeleteProductDialog(false)
    setProduct(emptyProduct)
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    })
  }

  const findIndexById = (id) => {
    let index = -1
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        index = i
        break
      }
    }

    return index
  }

  const createId = () => {
    let id = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id
  }

  // const importCSV = (e) => {
  //   const file = e.files[0]
  //   const reader = new FileReader()
  //   reader.onload = (e) => {
  //     const csv = e.target.result
  //     const data = csv.split('\n')

  //     // Prepare DataTable
  //     const cols = data[0].replace(/['"]+/g, '').split(',')
  //     data.shift()

  //     const importedData = data.map((d) => {
  //       d = d.split(',')
  //       const processedData = cols.reduce((obj, c, i) => {
  //         c =
  //           c === 'Status'
  //             ? 'inventoryStatus'
  //             : c === 'Reviews'
  //             ? 'rating'
  //             : c.toLowerCase()
  //         obj[c] = d[i].replace(/['"]+/g, '')
  //         ;(c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]))
  //         return obj
  //       }, {})

  //       processedData['id'] = createId()
  //       return processedData
  //     })

  //     const _products = [...products, ...importedData]

  //     setProducts(_products)
  //   }

  //   reader.readAsText(file, 'UTF-8')
  // }

  const exportCSV = () => {
    dt.current.exportCSV()
  }

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true)
  }

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val))
    setProducts(_products)
    setDeleteProductsDialog(false)
    setSelectedProducts(null)
    toast.current.show({
      severity: 'success',
      summary: 'Successful',
      detail: 'Productos eliminados',
      life: 3000,
    })
  }

  const onCategoryChange = (e) => {
    let _product = { ...product }
    _product['categoria'] = e.value
    setProduct(_product)
  }

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || ''
    let _product = { ...product }
    _product[`${name}`] = val

    setProduct(_product)
  }

  const onInputNumberChange = (e, name) => {
    const val = e.value || 0
    let _product = { ...product }
    _product[`${name}`] = val

    setProduct(_product)
  }

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Nuevo"
          icon="pi pi-plus"
          className="p-button-success mr-2"
          onClick={openNew}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          className="p-button-danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </React.Fragment>
    )
  }

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        {/* <FileUpload
          mode="basic"
          name="demo[]"
          auto
          url="https://primefaces.org/primereact/showcase/upload.php"
          accept=".csv"
          chooseLabel="Import"
          className="mr-2 inline-block"
          onUpload={importCSV}
        /> */}
        <Button
          label="Exportar"
          icon="pi pi-upload"
          className="p-button-help"
          onClick={exportCSV}
        />
      </React.Fragment>
    )
  }

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={rowData.foto}
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        alt={rowData.foto}
        className="product-image"
      />
    )
  }

  const priceBodyTemplate = (rowData) => {
    return rowData.precio
  }

  // const ratingBodyTemplate = (rowData) => {
  //   return <Rating value={rowData.rating} readOnly cancel={false} />
  // }

  // const statusBodyTemplate = (rowData) => {
  //   return (
  //     <span
  //       className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
  //     >
  //       {rowData.inventoryStatus}
  //     </span>
  //   )
  // }

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
          onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    )
  }

  const header = (
    <div className="table-header">
      <h5 className="mx-0 my-1">Gestionar Productos</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Buscar..."
        />
      </span>
    </div>
  )
  const productDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Guardar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveProduct}
      />
    </React.Fragment>
  )
  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Si"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteProduct}
      />
    </React.Fragment>
  )
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Si"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  )

  return (
    <div className="datatable-crud-demo">
      <Toast ref={toast} />

      <div className="card">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>

        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos"
          globalFilter={globalFilter}
          header={header}
          responsiveLayout="scroll"
          emptyMessage="No hay productos aún"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: '3rem' }}
            exportable={false}
          ></Column>
          <Column
            field="id"
            header="Id"
            sortable
            style={{ minWidth: '12rem' }}
          ></Column>
          <Column
            field="nombre"
            header="Nombre"
            sortable
            style={{ minWidth: '16rem' }}
          ></Column>
          <Column
            field="imagen"
            header="Imagen"
            body={imageBodyTemplate}
          ></Column>
          <Column
            field="precio"
            header="Precio"
            body={priceBodyTemplate}
            sortable
            style={{ minWidth: '8rem' }}
          ></Column>
          <Column
            field="categoria"
            header="Categoría"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          {/* <Column
            field="inventoryStatus"
            header="Status"
            body={statusBodyTemplate}
            sortable
            style={{ minWidth: '12rem' }}
          ></Column> */}
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: '8rem' }}
          ></Column>
        </DataTable>
      </div>

      <Dialog
        visible={productDialog}
        style={{ width: '450px' }}
        header="Detalle de producto"
        modal
        className="p-fluid"
        footer={productDialogFooter}
        onHide={hideDialog}
      >
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <InputText
            id="nombre"
            value={product.nombre}
            onChange={(e) => onInputChange(e, 'nombre')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !product.nombre,
            })}
          />
          {submitted && !product.nombre && (
            <small className="p-error">Name is required.</small>
          )}
        </div>
        {product.foto && (
          <img
            style={{ width: '100px' }}
            src={product.foto}
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            alt={product.foto}
            className="product-image block m-auto pb-3"
          />
        )}
        <div className="field">
          <label htmlFor="name">Foto</label>
          <InputText
            id="foto"
            value={product.foto}
            onChange={(e) => onInputChange(e, 'foto')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !product.foto,
            })}
          />
          {submitted && !product.foto && (
            <small className="p-error">La foto es obligatoria.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="description">Descripción</label>
          <InputTextarea
            id="descripcion"
            value={product.descripcion}
            onChange={(e) => onInputChange(e, 'descripcion')}
            required
            rows={3}
            cols={20}
          />
        </div>

        <div className="field">
          <label htmlFor="name">Dimensiones</label>
          <InputText
            id="dimensiones"
            value={product.dimensiones}
            onChange={(e) => onInputChange(e, 'dimensiones')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !product.dimensiones,
            })}
          />
          {submitted && !product.dimensiones && (
            <small className="p-error">Las dimensiones son obligatorias.</small>
          )}
        </div>

        <div className="field">
          <label htmlFor="name">Referencia</label>
          <InputText
            id="referencia"
            value={product.referencia}
            onChange={(e) => onInputChange(e, 'referencia')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !product.referencia,
            })}
          />
          {submitted && !product.referencia && (
            <small className="p-error">La referencia es obligatoria.</small>
          )}
        </div>

        <div className="field">
          <label className="mb-3">Categoría</label>
          <div className="formgrid grid">
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="categoria1"
                name="categoria"
                value="juguetes"
                onChange={onCategoryChange}
                checked={product.categoria === 'juguetes'}
              />
              <label htmlFor="category1">Juguetes</label>
            </div>
            <div className="field-radiobutton col-6">
              <RadioButton
                inputId="categoria2"
                name="categoria"
                value="muebles"
                onChange={onCategoryChange}
                checked={product.categoria === 'muebles'}
              />
              <label htmlFor="category2">Muebles</label>
            </div>
          </div>
        </div>

        <div className="formgrid grid">
          <div className="field col">
            <label htmlFor="price">Precio</label>
            <InputNumber
              id="precio"
              value={product.precio}
              onValueChange={(e) => onInputNumberChange(e, 'precio')}
              mode="currency"
              currency="COP"
              locale="en-US"
            />
          </div>
          {/* <div className="field col">
            <label htmlFor="quantity">Cantidad</label>
            <InputNumber
              id="cantidad"
              value={product.cantidad}
              onValueChange={(e) => onInputNumberChange(e, 'cantidad')}
              integeronly
            />
          </div> */}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: '450px' }}
        header="Confirmar"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          {product && (
            <span>
              ¿ Está seguro de que desea eliminar <b>{product.nombre}</b>?
            </span>
          )}
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: '450px' }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          {product && (
            <span>
              ¿ Está seguro de que desea eliminar los productos seleccionados ?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  )
}

export { ProductAdmin }
