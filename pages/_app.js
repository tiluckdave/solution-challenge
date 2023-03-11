import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '/components/nav'



export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
