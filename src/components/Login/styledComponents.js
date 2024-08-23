import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => props.loginBackgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 320px;
  width: 300px;
  box-shadow: ${props =>
    props.themeStatus ? null : '10px 10px 20px 1px #e2e8f0'};
  border-radius: 10px;
  background-color: ${props => (props.themeStatus ? '#000000' : '#ffffff')};

  @media screen and (max-width: 578px) {
    max-width: 80%;
  }
`

export const FormContainerImageElement = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LabelElement = styled.label`
  color: ${props => (props.themeStatus ? '#ffffff' : '#475569')};
  font-size: 15px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const InputElement = styled.input`
  padding: 8px;
  border-radius: 4px;
  border-width: 0px;
  border: 1px solid #94a3b8;
  background-color: ${props => (props.themeStatus ? 'transparent' : '#f1f5f9')};
  outline: none;
  color: ${props => (props.themeStatus ? '#ffffff' : '#000000')};
`

export const ShowPasswordContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`

export const PasswordTickBox = styled.input`
  width: 20px;
  cursor: pointer;
  margin: 0px;
`

export const PasswordLabelElement = styled.label`
  color: #0f0f0f;
  font-family: 'Roboto';
  color: ${props => (props.themeStatus ? '#ffffff' : '000000')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-width: 0px;
  color: #ffffff;
  padding: 8px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
`
