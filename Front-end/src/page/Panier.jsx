import { BsTrash3 } from "react-icons/bs"
import axios from "axios"
import { useState, useEffect } from "react"
import { Formik, Field } from "formik"
import { logToken } from "../Storage/logToken"

const Panier = () => {
  const header = { headers: { Authorization: `Bearer ${logToken.token}` } }
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState(0)
  const user = JSON.parse(logToken.loggedUser)
  const getUser = axios.get(`http://localhost:3000/users/${user.id}`,
    header)
  
  const initialValues = {
    stock : 1
  }

  const handleSubmit = (values) => {
    axios.get(`http://localhost:3000/orders/${order.id}`, header)
  }

  const deleteItem = (orderId, productId) => {
    const falseData = 0
    const orderProducts = order.products
    orderProducts.splice(orderProducts.indexOf(orderProducts.find(x => x.id === productId)), 1)
    console.log(orderProducts)
    axios.patch(`http://localhost:3000/orders/${orderId}`,
      {
        finished: falseData,
        products: orderProducts
      }, header)
  }

  const numberItem = (productPrice, values) => {
    console.log(values)
    setTotal(total+parseInt(productPrice))
  }

  useEffect(() => {
    getUser.then(response => {
      response.data.result.orders.map(order => {
        if (!order.finished) {
          axios.get(`http://localhost:3000/orders/${order.id}`).then(res => setOrder(order => res.data.result))
        }
      })
    })
  }, [order, user.id])

  useEffect((order) => {
    if (order) {
    getUser.then(response => {
      response.data.result.orders.map(order => {
        if (!order.finished) {
          axios.get(`http://localhost:3000/orders/${order.id}`).then(res => setOrder(order => { 
            res.data.result.products.map(x => setTotal(total => total+x.price))
           }))
        }
      })
    })
  }
  })

  if (order.products) {

    return <div className="flex flex-col lg:border-2 lg:border-black lg:border mx-16">
      <span className="font-extrabold text-4xl pl-4 pb-8 mx-auto justify-center">Panier</span>
          <div className="lg:flex">
            <div className="pl-4 pt-2 flex flex-col lg:w-1/2 lg:pl-0 lg:pl-40">
          {order.products.map(product => (
            <Formik
              key={product.id}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex h-28 lg:w-2/3 mb-4 lg:h-40 lg:w-full">
                  <div className="flex w-4/5">
                    <img className="w-5/12 mr-4 object-cover" src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className="flex flex-col w-7/12">
                      <span className="h-6 w-full text-base font-bold mb-4 overflow-x-hidden	">{product.name}</span>
                      <span className="text-xs break-words overflow-hidden mb-1">{product.description}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-1/5">
                    <span className="h-1/5 w-5/12 font-bold mt-6 mr-4 lg:mr-0">{product.price}€</span>
                    <Field name="stock" onClick={() => { numberItem(product.price, product) }} type="number" min="0" max={product.stock} className="h-1/5 w-1/2 text-center border-2 border-black font-bold mt-6 mr-4 lg:mr-0" />
                    <button>
                      <BsTrash3 onClick={() => { deleteItem(order.id, product.id) }} size={25} className="my-6 mr-4 lg:mr-0" />
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          ))}
        </div>
            <span className="ml-12 lg:relative font-extrabold text-xl pl-4 lg:w-1/2">
              
          <div className="flex lg:absolute lg:bottom-0 flex-col justify-end lg:w-2/3">
            <span>Total { total } €</span>
            <span className="font-extrabold text-sm pl-1 text-slate-400">TVA 10% { ((total*10)/100).toFixed(2) } € </span>
                <button className="border-4 border-black py-2 mt-6  hover:bg-black hover:text-white">Passer la commande</button>
              </div>
          </span>
          </div>
    </div>
  }
}

export default Panier