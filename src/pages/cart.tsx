import Card from "@/components/card/card"
import Layout from "@/layout/layout"
import { Box, Button, Text } from "@chakra-ui/react"
import { faBasketShopping, faCreditCard, faPerson, faRightFromBracket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { Context } from "./_app"

const Cart = () => {

    const { cartItems } = useContext(Context)

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        let countTest = 0
        cartItems.map((i: any) => {
            countTest = countTest + i.price
        })
        setCount(countTest)
    }, [cartItems])

    return (
        <Layout>
            <Box>
                <Box mb={"15px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} gap={"15px"} justifyContent={"end"} alignItems={"center"}>
                        <Link href={"/"}>
                            <Button size={"sm"} display={"flex"} justifyContent={"center"} gap={"5px"} alignItems={"center"} >Ortga <FontAwesomeIcon icon={faRightFromBracket} /></Button>
                        </Link>
                    </Box>
                    <Text fontSize={"20px"} fontWeight={700} ><FontAwesomeIcon icon={faShoppingCart} /> Savatcha</Text>
                </Box>
                <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"15px"} fontWeight={700} ><FontAwesomeIcon icon={faBasketShopping} /> Maxsulotlar: {cartItems.length}ta</Text>
                    <Text fontSize={"15px"} fontWeight={700}><FontAwesomeIcon icon={faCreditCard} /> To'liq narx: {count} so'm</Text>
                </Box>
                <Box display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"}>
                    {
                        cartItems.map((i: any) => {
                            return <Card i={i} count={i.counter} />
                        })
                    }
                    {
                        !cartItems.length && 
                        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} my={"20px"} >
                            <Text fontSize={"18px"} >Savat bo'sh!</Text> 
                            <Link href={"/"}>
                                <Button size={"sm"}>Maxsulotlarni ko'rish</Button>
                            </Link>
                        </Box>
                    }
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