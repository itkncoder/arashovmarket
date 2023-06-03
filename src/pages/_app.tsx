import { ChakraProvider } from '@chakra-ui/react'
import "@/styles/globals.css"
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const Context = createContext<any>(null)

function App({ Component, pageProps }: any) {
    const [cartItems, setCartItems] = useState<object[]>([])
    const [allProducts, setAllProducts] = useState<any>([])

    useEffect(() => {
        localStorage.setItem("chakra-ui-color-mode", "dark")
    }, [])

    return (
        <Context.Provider value={{cartItems, setCartItems, allProducts, setAllProducts}} >
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Context.Provider>
    )
}

export default App;