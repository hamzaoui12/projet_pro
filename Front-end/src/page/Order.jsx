import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaTrash } from "react-icons/fa"


const Order = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [totalPrice, setTotalPrice] = useState(0)
    const [productList, setProductList] = useState([])
    const [tva, setTva] = useState(0)
    const [orderId, setOrderId] = useState(0)
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("")
    const [finished, setFinished] = useState(false)
    const [canceled, setCanceled] = useState(false)
    const [arrived, setArrived] = useState(false)
    const [progress, setProgress] = useState(false)
    const [address, setAddress] = useState(null)



    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "..."
        }

        
return str
    }

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
        const token = localStorage.getItem("token")

        const fetchAddress = async () => {
            const { data } = await axios.get(`http://localhost:3001/address/user/${loggedUser.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAddress({
                name: capitalizeFirstLetter(loggedUser.firstName) + " " + capitalizeFirstLetter(loggedUser.lastName),
                city: data[0].postalCode + " " + capitalizeFirstLetter(data[0].city),
                country: data[0].country.toUpperCase(),
                phoneNumber: data[0].users[0].phoneNumber,
            })
        }

        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3001/orders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })

                const total = data.result.total
                const tva = data.result.tva
                const dateString = data.result.date
                const date = new Date(dateString)
                const formattedDate = date.toISOString().split("T")[0].replace(/-/g, "/")

                setFinished(data.result.finished)
                setArrived(data.result.arrived)
                setProgress(data.result.progress)
                setCanceled(data.result.canceled)
                setDate(formattedDate)
                setOrderId(data.result.id)
                setTotalPrice(total)
                setTva(tva)

                const productList = data.result.products.map((product) => ({
                    id: product.id,
                    name: product.name,
                    description: truncateString(product.description, 50),
                    price: product.price,
                }))
                setProductList(productList)

                if (data.result.finished) {
                    setStatus("TERMINÉ")
                } else if (data.result.canceled) {
                    setStatus("ANNULÉ")
                } else if (data.result.arrived) {
                    setStatus("ARRIVÉ")
                } else if (data.result.progress) {
                    setStatus("EN COURS")
                }
            } catch (error) {
                console.error(error)
            }
        }

        try {
            setLoading(true)
            fetchAddress()
            fetchData()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [id])


    const updateOrder = async (productId, productPrice) => {
        const token = localStorage.getItem("token")

        const updatedProductList = productList.filter(
            (product) => product.id !== productId
        )
        setProductList(updatedProductList)
        const currentDate = new Date()
        const formattedDate = currentDate.toISOString().split("T")[0]

        try {
            const newTotal = totalPrice - productPrice
            const newProductList = productList.filter(
                (product) => product.id !== productId
            )
            const requestBody = {
                canceled: canceled,
                total: newTotal,
                tva: tva,
                finished: finished,
                arrived: arrived,
                progress: progress,
                date: formattedDate,
                products: newProductList,
            }
            setTotalPrice(newTotal)

            await axios.patch(
                    `http://localhost:3002/orders/${id}`,
                    requestBody,
                    {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    },
                    }
                )
        } catch (error) {
            console.error("Error updating order:", error)
        }
    }

    return (
        <>
            {loading === true ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold text-center mt-5">Commande # {orderId} - {date} - {status}</h1>
                    <div className="flex flex-col md:flex-row p-10 mt-4">
                        <div className="w-full md:w-1/2">
                            {productList.map((product) => (
                                <div key={product.id} className="grid grid-cols-2 gap-4 mb-10">
                                    <div>
                                        <h3 className="text-lg">
                                            <b>{product.name}</b>
                                        </h3>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="grid grid-rows-3 gap-4">
                                            <div className="flex justify-center">
                                                <p className="text-sm">
                                                    <b>Price: {product.price}€</b>
                                                </p>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="w-12 bg-gray-200 py-2 px-1 text-center rounded-md">
                                                    {1}
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                {status === "EN COURS" && (
                                                    <div
                                                        className="text-gray-500 text-sm mt-3"
                                                        onClick={() => updateOrder(product.id, product.price)}
                                                    >
                                                        <FaTrash className="cursor-pointer" size={20} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="grid gap-5">
                                <div className="row-span-1 flex items-center" style={{ height: "fit-content" }}>
                                    <h3 className="text-lg">
                                        <b>Total</b>
                                    </h3>
                                    <h3 className="text-lg ml-auto text-right">
                                        <b>{totalPrice} €</b>
                                    </h3>
                                </div>
                                <div className="row-span-1 flex items-center" style={{ height: "fit-content" }}>
                                    <p className="text-sm text-gray-500">TVA</p>
                                    <p className="text-sm text-gray-500 ml-auto">{tva} €</p>
                                </div>
                                <hr className="border-solid border-black border-2 w-100" />
                                {address !== null && (
                                    <div className="row-span-1">
                                        <h3 className="text-lg">
                                            <b>Adresse de livraison</b>
                                        </h3>
                                        <p className="text-sm">{address.name}</p>
                                        <p className="text-sm">{address.city}</p>
                                        <p className="text-sm">{address.country}</p>
                                        <p className="text-sm">{address.phoneNumber}</p>
                                    </div>
                                )}
                                {address !== null && (
                                    <div className="row-span-1">
                                        <h3 className="text-lg">
                                            <b>Adresse de facturation</b>
                                        </h3>
                                        <p className="text-sm">{address.name}</p>
                                        <p className="text-sm">{address.city}</p>
                                        <p className="text-sm">{address.country}</p>
                                        <p className="text-sm">{address.phoneNumber}</p>
                                    </div>
                                )}
                                <div className="row-span-1">
                                    <h3 className="text-lg">
                                        <b>Moyen de paiement</b>
                                    </h3>
                                    <p>MasterCard</p>
                                    <p>**** **** **** 1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Order