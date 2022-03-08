import variables from '../../../environment/const'

export class UserService {
  registerUser(user) {
    const apiUrl = variables.API_URL
    const headersList = {
      Accept: '*/*',
    }

    const bodyContent = new FormData()

    Object.keys(user).forEach((key) => bodyContent.append(key, user[key]))
    bodyContent.append('username', `${user.first_name}${user.last_name}`)
    bodyContent.append('password_confirmation', user.password)

    return fetch(`${apiUrl}/users/signup/`, {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text)
          })
        }
        return response.text()
      })
      .then((data) => data)
      .catch((error) => error)
  }
}
