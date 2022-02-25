import { UserService } from './UserService'
import { useState } from 'react'
import { Toast } from 'primereact/toast'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'

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

  return (
    <>
      <div className="user-form">
        <div className="field">
          <label htmlFor="name">Primer nombre</label>
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
            <small className="p-error">Name is required.</small>
          )}
        </div>
      </div>
    </>
  )
}

export { UserAdmin }
