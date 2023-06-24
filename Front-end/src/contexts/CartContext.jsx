import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [setTotal, cart])

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cart")

    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id)

    if (cartItem) {
      const newCart = cart.map((cartItem) =>
        cartItem.id.id === item.id.id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      )
      setCart(newCart)
    } else {
      const newItem = { ...item, amount: 1 }
      setCart((prevCart) => [...prevCart, newItem])
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }

    if (cartItem.amount < 2) {
      removeFromCart(id)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
