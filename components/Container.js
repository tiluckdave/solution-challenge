import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import {
    Flex
} from '@chakra-ui/react'


export default function Container({ children }) {
    return (
        <>
            <Navbar />
            <Flex bg="gray.50" minH="100vh">
                {children}
            </Flex>
            <Footer />
        </>
    )
}



