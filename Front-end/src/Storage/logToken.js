const logIn = (token, user) => {
  localStorage.setItem("token", token)
  localStorage.setItem("loggedUser", JSON.stringify(user))
}

const logOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("loggedUser")
}

const isLogIn = () => {
  if (localStorage.getItem("token")) {
    return true
  }
  
  return false
}

const token = localStorage.getItem("token")
const loggedUser = localStorage.getItem("loggedUser")

export const logToken = {
  logIn, logOut, isLogIn, token, loggedUser
}
