import variables from '../../environment/const'

const UserLogin = async (email, password) => {
  const apiUrl = variables.API_URL

  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  }

  let bodyContent = JSON.stringify({
    email: email,
    password: password,
  })

  let returnedData = {}

  await fetch(`${apiUrl}/users/login/`, {
    method: 'POST',
    body: bodyContent,
    headers: headersList,
  })
    .then((response) => {
      if (!response.ok)
        return response.text().then((text) => {
          throw new Error(text)
        })
      return response.json()
    })
    .then((data) => {
      returnedData = data
    })
    .catch((error) => {
      returnedData = error
    })

  return returnedData
}

export { UserLogin }
