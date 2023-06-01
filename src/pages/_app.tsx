import { ChakraProvider } from '@chakra-ui/react'
import "@/styles/globals.css"
import { useEffect } from 'react'

function App({ Component, pageProps }: any) {

  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "dark")
  }, [])

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;