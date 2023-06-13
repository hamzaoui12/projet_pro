import React, { useState } from "react"

const OrderPage = () => {
  const [order, setOrder] = useState({
    id: 1234,
    items: [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 15 },
    ],
    shippingAddress: "123 Main St",
    billingAddress: "456 Oak Ave",
    paymentMethod: "Credit Card",
    status: "Pending",
  })

  const cancelOrder = () => {
    if (order.status === "Pending") {
      setOrder({ ...order, status: "Cancelled" })
    }
  }

  const returnProduct = (productId) => {
    const updatedItems = order.items.filter((item) => item.id !== productId)
    setOrder({ ...order, items: updatedItems })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Order #{order.id}</h2>
          <p>Status: {order.status}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Items</h3>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button
                  className="ml-2 text-red-500"
                  onClick={() => returnProduct(item.id)}
                >
                  Return
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Shipping Address</h3>
          <p>{order.shippingAddress}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Billing Address</h3>
          <p>{order.billingAddress}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <p>{order.paymentMethod}</p>
        </div>
        {order.status === "Pending" && (
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={cancelOrder}
          >
            Cancel Order
          </button>
        )}
      </div>
    </div>
  )
}

export default OrderPage
