import axios from "axios"

const getOneRequest = async (url, id, headers = {}) => {
  return await axios.get(`${process.env.REACT_APP_URL_ROUTE}/${url}/${id}`, { headers: headers })
}

export default getOneRequest