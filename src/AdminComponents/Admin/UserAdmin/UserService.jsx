export class UserService {
  registerUser(user) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    }

    const bodyContent = JSON.stringify(user)

    return fetch('http://localhost:8000/users/', {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.text())
      .then((data) => data)
  }
}
