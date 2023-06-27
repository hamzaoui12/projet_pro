import getOneRequest from "./getOneRequest"

const inActualOrder = async (myFunction) => {
  const userData = JSON.parse(localStorage.getItem("loggedUser"))
  const token = localStorage.getItem("token")
  getOneRequest("users", userData.id, {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    })
  .then((response) => {
    myFunction(response, userData, token)
  })
}

export default inActualOrder