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

import NxtWatchContext from '../NxtWatchContext/context'

const DarkThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LightThemeWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Login extends Component {
  state = {userName: '', password: ''}

  componentDidMount() {
    this.onSubmitForm()
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {userName, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)

    const data = await response.json()
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeStatus} = value
          console.log(themeStatus)
          const LoginBackgroundColor = themeStatus ? '#383838 ' : '#ffffff'
          const activeFormContainerLogo = themeStatus
            ? DarkThemeWebsiteLogo
            : LightThemeWebsiteLogo

          return (
            <LoginContainer loginBackgroundColor={LoginBackgroundColor}>
              <FormContainer
                type="form"
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
                    value={userName}
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
              </FormContainer>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
