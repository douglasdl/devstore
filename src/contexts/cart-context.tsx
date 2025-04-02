'use client'

import { type ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItems(state => {
      const productInCart = state.some(item => item.productId === productId)

      if (productInCart) {
        return state.map(item => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      }
      return [...state, { productId, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
