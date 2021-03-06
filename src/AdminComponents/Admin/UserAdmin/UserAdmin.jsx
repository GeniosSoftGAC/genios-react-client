import { UserService } from './UserService'
import { useState } from 'react'
// import { Toast } from 'primereact/toast'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { classNames } from 'primereact/utils'
import { Dialog } from 'primereact/dialog'
import variables from '../../../environment/const'
import React from 'react'

import { useForm, Controller } from 'react-hook-form'

import '../styles/AdminStyles.css'
const UserAdmin = () => {
  const [userDialog, setUserDialog] = useState(false)
  const [errorDialog, setErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState({
    visible: false,
    message: '',
  })
  const [formData, setFormData] = useState({})

  // TO use react-hook-form the initial object
  // has to be called defaultValues
  let defaultValues = {
    email: '',
    first_name: '',
    last_name: '',
    // username: '',
    phone: '',
    password: '',
    // password_confirmation: '',
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues })

  const userService = new UserService()

  const adminLink = `http://ec2-54-233-147-49.sa-east-1.compute.amazonaws.com:8000/admin`

  const onSubmit = (data) => {
    userService.registerUser(data).then((data) => {
      // handle errors
      if (data.message) {
        const errorMessage = JSON.parse(data.message)
        Object.keys(errorMessage).forEach((field) => {
          setErrorMessage(`${field} ${errorMessage[field][0]}`)
        })
        setErrorDialog(true)
        return
      }

      setSuccess({ visible: true, message: 'Usuario creado exitosamente' })
    })

    setFormData(data)
    reset()
  }

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }

  const passwordHeader = <h6>Crea una contrase??a</h6>
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
        <li>Al menos una min??scula</li>
        <li>Al menos una may??scula</li>
        <li>Al menos un num??rico</li>
        <li>M??nimo 8 caracteres.</li>
      </ul>
    </React.Fragment>
  )

  return (
    <>
      <div className="user-form-titles">
        <h1>Registro de usuario</h1>
        <Button
          label="Crear nuevo usuario"
          onClick={() => setUserDialog(true)}
          icon="pi pi-plus"
        />
        <p>
          Si tiene permisos de super usuario,
          <br />
          puede administrar los usuarios{' '}
          <a href={adminLink} target="_blank">
            aqu??
          </a>
        </p>
      </div>
      <Dialog
        visible={userDialog}
        style={{ width: '450px' }}
        header="Crear nuevo usuario"
        modal
        className="p-fluid"
        onHide={() => setUserDialog(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="user-form p-fluid">
          {/*    CAMPO PARA EMAIL */}
          <div className="p-field">
            <span className="p-float-label">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'El correo es obligatorio.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Correo no v??lido . E.g. ejemplo@email.com',
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
          <div className="field">
            <span className="p-float-label">
              <Controller
                name="first_name"
                control={control}
                rules={{ required: 'El Primer nombre es obligatorio.' }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.first_name}
                    {...field}
                    autoFocus
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="first_name"
                className={classNames({ 'p-error': errors.first_name })}
              >
                Primer Nombre*
              </label>
            </span>
            {getFormErrorMessage('first_name')}
          </div>
          <div className="field">
            <span className="p-float-label">
              <Controller
                name="last_name"
                control={control}
                rules={{ required: 'El apellido es obligatorio.' }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.last_name}
                    {...field}
                    autoFocus
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="apellido_name"
                className={classNames({ 'p-error': errors.last_name })}
              >
                Apellido*
              </label>
            </span>
            {getFormErrorMessage('second_name')}
          </div>
          <div className="field">
            <span className="p-float-label">
              <Controller
                name="phone"
                control={control}
                rules={{ required: 'El tel??fono es obligatorio.' }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.phone}
                    {...field}
                    autoFocus
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
              <label
                htmlFor="phone"
                className={classNames({ 'p-error': errors.phone })}
              >
                Tel??fono*
              </label>
            </span>
            {getFormErrorMessage('phone')}
          </div>
          <div className="field">
            <span className="p-float-label">
              <Controller
                name="password"
                control={control}
                rules={{ required: 'La contrase??a es obligatoria' }}
                render={({ field, fieldState }) => (
                  <Password
                    id={field.name}
                    {...field}
                    toggleMask
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                    header={passwordHeader}
                    footer={passwordFooter}
                  />
                )}
              />
              <label
                htmlFor="password"
                className={classNames({ 'p-error': errors.password })}
              >
                Contrase??a*
              </label>
            </span>
            {getFormErrorMessage('password')}
          </div>
          <Button type="submit" label="Crear Usuario" />
        </form>
      </Dialog>

      <Dialog
        visible={errorDialog}
        header="ERROR DE REGISTRO"
        modal
        onHide={() => setErrorDialog(false)}
      >
        <p>{errorMessage}</p>
      </Dialog>
      <Dialog
        visible={success.visible}
        modal
        onHide={() => setSuccess({ ...success, visible: false })}
      >
        <p>{success.message}</p>
      </Dialog>
    </>
  )
}

export { UserAdmin }
