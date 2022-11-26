
import { ACCESS_TOKEN_EXPIRE_TIME } from "~/utils/constants";
import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => {
  console.log(getAccessToken())
  let access = getAccessToken()
  return  access !== 'undefined' && typeof access !== 'undefined'
}


export const authenticate = async (redirectedLink,) => {
  if (getRefreshToken()) {
    try {
      const tokens = await refreshTokens() // check if access still valid

      const expires = new Date(new Date().getTime() + ACCESS_TOKEN_EXPIRE_TIME)

      // you will have the exact same setters in your Login page/app too
      Cookies.set('access_token', tokens.access_token, { expires: expires })
      Cookies.set('refresh_token', tokens.refresh_token)

      return true
    } catch (error) {
      redirectToLogin()
      return false
    }
  }

  redirectToLogin()
  return false
}