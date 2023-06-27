import axios from "axios"

const patchRequest = async (url, body, id, headers = {}) => {
  return await axios.patch(`${process.env.REACT_APP_URL_ROUTE}/${url}/${id}`, body, { headers: headers })
}

export default patchRequest