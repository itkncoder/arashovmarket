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
                <Box position={"fixed"} zIndex={10} bottom={"50px"} left={"50%"} transform={"translateX(-50%)"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"#D79B00"} _hover={{bg: "#B88400"}} size={"sm"} >Savatni ko'rish <FontAwesomeIcon style={{padding: "0 2px"}} icon={faShoppingCart} /> </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout