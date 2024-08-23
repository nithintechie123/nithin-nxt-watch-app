import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

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
  ErrorMessage,
} from './styledComponents'

import NxtWatchContext from '../NxtWatchContext/context'

const DarkThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value

          const LoginBackgroundColor = themeStatus ? '#383838 ' : '#ffffff'
          const activeFormContainerLogo = themeStatus
            ? DarkThemeWebsiteLogo
            : LightThemeWebsiteLogo

          return (
            <LoginContainer loginBackgroundColor={LoginBackgroundColor}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                themeStatus={themeStatus}
              >
                <FormContainerImageElement src={activeFormContainerLogo} />
                <InputContainer>
                  <LabelElement htmlFor="username" themeStatus={themeStatus}>
                    USERNAME
                  </LabelElement>
                  <InputElement
                    type="text"
                    id="username"
                    placeholder="Username"
                    themeStatus={themeStatus}
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                </InputContainer>
                <InputContainer>
                  <LabelElement htmlFor="password" themeStatus={themeStatus}>
                    PASSWORD
                  </LabelElement>
                  <InputElement
                    type="password"
                    id="password"
                    placeholder="Password"
                    themeStatus={themeStatus}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <ShowPasswordContainer>
                    <PasswordTickBox type="checkbox" id="show-password" />
                    <PasswordLabelElement
                      htmlFor="show-password"
                      themeStatus={themeStatus}
                    >
                      Show Password
                    </PasswordLabelElement>
                  </ShowPasswordContainer>
                </InputContainer>
                <LoginButton type="submit">Login</LoginButton>
                <ErrorMessage>{showErrorMsg && `*${errorMsg}`}</ErrorMessage>
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
