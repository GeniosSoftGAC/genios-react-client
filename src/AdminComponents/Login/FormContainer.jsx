import styled from 'styled-components'

const FormContainer = styled.div`
  display: grid;
  place-items: center;

  .login-form__container {
    display: grid;
    height: -webkit-fill-available;
    padding: 3rem 1rem 1rem;

    .login-form__form {
      all: inherit;
      gap: 1.5rem;
    }
  }
`

export { FormContainer }
