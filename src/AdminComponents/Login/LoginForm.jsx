import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Dialog } from 'primereact/dialog'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import { InputText } from 'primereact/inputtext'
import { useNavigate } from 'react-router-dom'
import { UserLogin } from '../services/UserLogin'

const LoginForm = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [formData, setFormData] = useState({})

  const defaultValues = {
    email: '',
    password: '',
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const onSubmit = (data) => {
    const response = UserLogin(data.email, data.password)
    response.then((data) => {
      // Capture error messages
      if (!Object.keys(data).length) {
        const dataErrorMessage = JSON.parse(data.message)

        if (dataErrorMessage.password) {
          setLoginError(`Password Error: ${dataErrorMessage.password[0]}`)
          setShowErrorMessage(true)
        } else {
          setLoginError(dataErrorMessage.non_field_errors[0])
          setShowErrorMessage(true)
        }
        return
      }
      // Success secuence
      setFormData(data.user)
      //set persist user data
      localStorage.setItem('login-data', JSON.stringify(data.user))
      setShowMessage(true)
      reset()
    })
  }

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }

  const navigate = useNavigate()

  const handleLoginSuccess = () => {
    navigate('/admin/product-admin')
    setShowMessage(false)
  }

  const successDialogFooter = (
    <div className="p-d-flex p-jc-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={handleLoginSuccess}
      />
    </div>
  )

  useEffect(() => {
    const userConnection = JSON.parse(localStorage.getItem('login-data'))
    if (!userConnection) return
    handleLoginSuccess()
  })

  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="center"
        footer={successDialogFooter}
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
          <h5> Bienvenid@ {formData.first_name}</h5>
        </div>
      </Dialog>
      {/*Error Message */}
      <Dialog
        visible={showErrorMessage}
        onHide={() => setShowErrorMessage(false)}
        position="center"
        breakpoints={{ '960px': '80vw' }}
        style={{ width: '30vw' }}
      >
        <div
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            placeItems: 'center',
            gap: '1rem',
          }}
        >
          <i
            style={{ fontSize: '3rem', color: 'var(--pink-500)' }}
            className="pi pi-info-circle"
          ></i>
          <h5>{loginError} </h5>
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
                name="email"
                control={control}
                rules={{
                  required: 'El correo es obligatorio.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Correo no válido . E.g. ejemplo@email.com',
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.email}
                    {...field}
                    autoFocus
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="email"
                className={classNames({ 'p-error': !!errors.email })}
              >
                Email*
              </label>
            </span>
            {getFormErrorMessage('email')}
          </div>

          {/*    CAMPO PARA PASSWORD */}
          <div className="p-field">
            <span className="p-float-label">
              <Controller
                name="password"
                control={control}
                rules={{ required: 'La contraseña es obligatoria.' }}
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
                Contraseña*
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
