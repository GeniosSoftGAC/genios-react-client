import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dialog } from 'primereact/dialog'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import { InputText } from 'primereact/inputtext'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [formData, setFormData] = useState({})

  const defaultValues = {
    name: '',
    password: '',
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  console.log(formData)

  const onSubmit = (data) => {
    setFormData(data)
    setShowMessage(true)
    reset()
  }

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }

  const navigate = useNavigate()
  const handleLoginSuccess = (event) => {
    navigate('/admin/product-admin')
    setShowMessage(false)
  }

  const dialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={handleLoginSuccess}
      />
    </div>
  )

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="center"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ '960px': '80vw' }}
        style={{ width: '30vw' }}
      >
        <div
          style={{ padding: '1rem' }}
          className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3"
        >
          <i
            className="pi pi-check-circle"
            style={{ fontSize: '5rem', color: 'var(--green-500)' }}
          ></i>
          <h5> Bienvenid@ {formData.name}</h5>
        </div>
      </Dialog>
      <div className="login-form__container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-fluid login-form__form"
        >
          <h1>Iniciar Sesión</h1>
          {/*    CAMPO PARA NOMBRE */}
          <div className="p-field">
            <span className="p-float-label">
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required.' }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    autoFocus
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="name"
                className={classNames({ 'p-error': errors.name })}
              >
                Name*
              </label>
            </span>
            {getFormErrorMessage('name')}
          </div>
          {/*    CAMPO PARA PASSWORD */}
          <div className="p-field">
            <span className="p-float-label">
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required.' }}
                render={({ field, fieldState }) => (
                  <Password
                    id={field.name}
                    {...field}
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                    feedback={false}
                  />
                )}
              />
              <label
                htmlFor="password"
                className={classNames({ 'p-error': errors.password })}
              >
                Password*
              </label>
            </span>
            {getFormErrorMessage('password')}
          </div>

          <Button type="submit" label="Submit" className="p-mt-2" />
        </form>
      </div>
    </>
  )
}

export { LoginForm }
