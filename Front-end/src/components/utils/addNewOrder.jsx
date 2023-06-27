import postRequest from "./postRequest"

const addNewOrder = (response, userData, token) => {
  if (!response.data.result.orders || response.data.result.orders.filter(order => order.finished === 0) < 1) {
    postRequest("orders", {
      "user_id": parseInt(userData.id),
    }, {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    })
    .then(response => localStorage.setItem("actualOrder", JSON.stringify(response.data.result)))
  }
}

export default addNewOrder