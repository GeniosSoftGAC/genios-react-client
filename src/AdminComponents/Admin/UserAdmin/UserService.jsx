export class UserService {
  registerUser(user) {
    const headersList = {
      Accept: '*/*',
    }

    const bodyContent = new FormData()

    Object.keys(user).forEach((key) => bodyContent.append(key, user[key]))
    bodyContent.append('username', user.email)
    bodyContent.append('password_confirmation', user.password)

    return fetch('http://localhost:8000/users/signup/', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.text())
      .then((data) => data)
  }
}
