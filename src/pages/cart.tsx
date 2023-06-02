import Card from "@/components/card/card"
import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import { faBasketShopping, faCreditCard, faPerson, faRightFromBracket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Cart = () => {
    return (
        <Layout>
            <Box>
                <Box mb={"15px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"20px"} fontWeight={700} ><FontAwesomeIcon icon={faShoppingCart} /> Savatcha:</Text>
                    <Box display={"flex"} gap={"15px"} justifyContent={"end"} alignItems={"center"}>
                        <Link href={"/"}>
                            <Text _hover={{textDecoration: "underline"}}>Admin <FontAwesomeIcon icon={faUser} /> </Text>
                        </Link>
                        <Link href={"/"}>
                            <Button size={"sm"} display={"flex"} justifyContent={"center"} gap={"5px"} alignItems={"center"} >Ortga <FontAwesomeIcon icon={faRightFromBracket} /></Button>
                        </Link>
                    </Box>
                </Box>
                <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"14px"} fontWeight={700} ><FontAwesomeIcon icon={faBasketShopping} /> Maxsulotlar: 3ta</Text>
                    <Text fontSize={"14px"} fontWeight={700}><FontAwesomeIcon icon={faCreditCard} /> To'liq narx: 280.000 so'm</Text>
                </Box>
                <Box display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Box>
                <Box mt={"35px"} display={"flex"} justifyContent={"center"}>
                    <Link href={"/checkout"}>
                        <Button px={"30px"} bg={"#D79B00"} _hover={{bg: "#B88400"}} >Chiqarib olish <FontAwesomeIcon style={{padding: "0 2px"}} icon={faShoppingCart} /> </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
}

export default Cart