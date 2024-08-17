import {Component} from 'react'

import {
  LoginContainer,
  FormContainer,
  FormContainerImageElement,
  InputContainer,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  PasswordTickBox,
  PasswordLabelElement,
  LoginButton,
} from '../../styledComponents'

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <FormContainer type="form">
          <FormContainerImageElement img="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <InputContainer>
            <LabelElement htmlFor="username">USERNAME</LabelElement>
            <InputElement type="text" id="username" />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="password">PASSWORD</LabelElement>
            <InputElement type="password" id="password" />
          </InputContainer>
          <ShowPasswordContainer>
            <PasswordTickBox type="checkbox" id="showpassword" />
            <PasswordLabelElement htmlFor="showpassword">
              Show Password
            </PasswordLabelElement>
          </ShowPasswordContainer>
          <LoginButton>Login</LoginButton>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default Login
