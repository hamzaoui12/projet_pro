import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Orders = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [sortedData, setSortedData] = useState({});

  const handleOrderClick = (id) => {
    navigate('/order/' + id)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (!token || !loggedUser) {
      window.location.href = '/Singin';
    }
    const fetchOrders = async () => {
      const { data } = await axios.get('${process.env.REACT_APP_URL_ROUTE}/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setOrders(data.result.filter(order => order.user_id === loggedUser.id))
    }
    try {
      setLoading(true);
      fetchOrders();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [loggedUser,token])

  useEffect(() => {
    if (orders !== []) {
      const dividedDataObj = {};
      orders.forEach(order => {
        const year = new Date(order.date).getFullYear().toString();
        if (!Object.prototype.hasOwnProperty.call(dividedDataObj, year)) {
          dividedDataObj[year] = [];
        }
        dividedDataObj[year].push(order);
      });
      const sortedKeys = Object.keys(dividedDataObj).reverse();

      const reversedDataObj = {};
      sortedKeys.forEach(key => {
        reversedDataObj[key] = dividedDataObj[key].reverse();
      });

      setSortedData(reversedDataObj);
    }
  }, [orders]);



  return (
    <div>
      {
        loading === true ? (
          <div className="flex justify-center items-center h-screen">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center mt-10">Mes commandes</h1>
            {
              orders.length === 0 ?
                (
                  <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-3xl font-bold">Aucune commande à afficher</h1>
                  </div>
                ) :
                (
                  <div className="container p-5 flex flex-col justify-center items-center">
                    <div className="w-3/5">
                      {
                        Object.keys(sortedData).reverse().map((year, index) => {
                          return (
                            <div key={index}>
                              <h2 className="text-2xl font-bold text-left mt-5 ml-2">{year}</h2>
                              <hr className="border-solid border-black border-2 w-100" />
                              {
                                sortedData[year].map((order, index) => {
                                  const date = new Date(order.date);
                                  const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "/");
                                  return (
                                    <div key={order.id} className="grid grid-cols-2 gap-4 mt-5 ml-2 py-4 cursor-pointer hover:bg-gray-200" onClick={() => handleOrderClick(order.id)}>
                                      <div className="col-span-1">
                                        <div className="grid grid-rows-2 gap-4">
                                          <div className="row-span-1 font-bold">{formattedDate}</div>
                                          <div className="row-span-1 text-gray-500">{order.products.length} articles</div>
                                        </div>
                                      </div>
                                      <div className="col-span-1">
                                        <div className="grid grid-rows-2 gap-4">
                                          <div className="row-span-1 font-bold">
                                            {
                                              order.arrived === 1 ? "ARRIVÉ" :
                                                order.canceled === 1 ? "ANNULÉ" :
                                                  order.finished === 1 ? "TERMINÉ" : "EN COURS"
                                            }
                                          </div>
                                          <div className="row-span-1 font-bold">{order.total} €</div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
            }
          </>
        )
      }
    </div >
  )
}

export default Orders
