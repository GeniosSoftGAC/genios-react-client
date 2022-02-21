const UserLogin = async (email, password) => {
  let headersList = {
    Accept: '*/*',
    'Content-Type': 'application/json',
  }

  let bodyContent = JSON.stringify({
    email: email,
    password: password,
  })

  let returnedData = {}

  await fetch('http://localhost:8000/users/login/', {
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
    .catch((error) => console.log(error))

  return returnedData
}

export { UserLogin }
