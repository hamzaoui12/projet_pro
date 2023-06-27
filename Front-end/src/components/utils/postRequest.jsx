import axios from "axios"

const postRequest = async (url, body, headers = {}) => {
  return await axios.post(`${process.env.REACT_APP_URL_ROUTE}/${url}`, body, { headers: headers })
}

export default postRequest