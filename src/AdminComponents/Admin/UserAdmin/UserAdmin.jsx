import { UserService } from './UserService'
import { useState } from 'react'
import { Toast } from 'primereact/toast'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import '../styles/AdminStyles.css'

const UserAdmin = () => {
  let emptyProduct = {
    email: '',
    first_name: '',
    second_name: '',
    username: '',
    phone: '',
    password: '',
    password_confirmation: '',
  }

  const [user, setUser] = useState(emptyProduct)
  const [submitted, setSubmitted] = useState(false)

  const userService = new UserService()

  // capture input values
  const onInputChange = (event, name) => {
    const value = (event.target && event.target.value) || ''
    let _user = { ...user }
    _user[`${name}`] = value

    setUser(_user)
  }

  const adminLink = 'http://localhost:8000/admin'

  return (
    <div className="user-form-container">
      <div className="user-form-titles">
        <h1>Registro de usuario</h1>
        <Button label="Crear nuevo usuario" icon="pi pi-plus" />
        <p>
          Si tiene permisos de super usuario,
          <br />
          puede administrar los usuarios{' '}
          <a href={adminLink} target="_blank">
            aquí
          </a>
        </p>
      </div>
      <div className="user-form">
        <div className="field">
          <label htmlFor="first_name">Primer nombre</label>
          <InputText
            id="first_name"
            value={user.first_name}
            onChange={(e) => onInputChange(e, 'first_name')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !user.first_name,
            })}
          />
          {submitted && !user.first_name && (
            <small className="p-error">First name is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="second_name">Segundo nombre</label>
          <InputText
            id="second_name"
            value={user.second_name}
            onChange={(e) => onInputChange(e, 'second_name')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !user.second_name,
            })}
          />
          {submitted && !user.second_name && (
            <small className="p-error">Second Name is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Correo</label>
          <InputText
            id="email"
            value={user.email}
            onChange={(e) => onInputChange(e, 'email')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !user.email,
            })}
          />
          {submitted && !user.email && (
            <small className="p-error">Email is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="username">Nombre de usuario</label>
          <InputText
            id="username"
            value={user.username}
            onChange={(e) => onInputChange(e, 'username')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !user.username,
            })}
          />
          {submitted && !user.username && (
            <small className="p-error">Username is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono</label>
          <InputText
            id="phone"
            value={user.phone}
            onChange={(e) => onInputChange(e, 'phone')}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !user.phone,
            })}
          />
          {submitted && !user.phone && (
            <small className="p-error">Phone is required.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <Password
            id="password"
            value={user.password}
            onChange={(e) => onInputChange(e, 'password')}
            toggleMask
          />
        </div>
        <div className="field">
          <label htmlFor="password_confirmation">Confirmar Contraseña</label>
          <Password
            id="password_confirmation"
            value={user.password_confirmation}
            onChange={(e) => onInputChange(e, 'password_confirmation')}
            toggleMask
          />
        </div>
      </div>
    </div>
  )
}

export { UserAdmin }
