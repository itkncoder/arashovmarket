import { Box, Button } from "@chakra-ui/react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"

const Layout = ({children}: {children: JSX.Element}) => {
    return (
        <Box minH={"100vh"} bg={"#1E1E1E"} >
            <Head>
                <title>Arashov Market</title>
            </Head>
            <Box maxW={"480px"} mx={"auto"} >
                <Box py={"25px"} >
                    <main>
                        {children}
                    </main>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout