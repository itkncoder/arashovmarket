import Card from "@/components/card/card"
import Layout from "@/layout/layout"
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { faBasketShopping, faCarSide, faCreditCard, faPerson, faRightFromBracket, faShoppingCart, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Checkout = () => {
    return (
        <Layout>
            <Box>
                <Box mb={"15px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"20px"} fontWeight={700} ><FontAwesomeIcon icon={faShoppingCart} /> Chiqarib olish:</Text>
                    <Box display={"flex"} gap={"15px"} justifyContent={"end"} alignItems={"center"}>
                        <Link href={"/cart"}>
                            <Button size={"sm"} display={"flex"} justifyContent={"center"} gap={"5px"} alignItems={"center"} >Savatchaga qaytish <FontAwesomeIcon icon={faShoppingCart} /></Button>
                        </Link>
                    </Box>
                </Box>
                <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"14px"} fontWeight={700} ><FontAwesomeIcon icon={faBasketShopping} /> Maxsulotlar: 3ta</Text>
                    <Text fontSize={"14px"} fontWeight={700}><FontAwesomeIcon icon={faCreditCard} /> To'liq narx: 280.000 so'm</Text>
                </Box>
                <Box my={"35px"} display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"}>
                    <Box display={"flex"} w={"100%"} justifyContent={"start"} >
                        <Text fontWeight={700} fontSize={"20px"} color={"#D79B00"} >To'ldiring:</Text>
                    </Box>
                    <Input placeholder="Ismingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input placeholder="Familiyangiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input placeholder="Telefon raqamingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input placeholder="Manzilingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input placeholder="Telegram Username..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                </Box>
                <Box>
                    <Text fontWeight={700}><FontAwesomeIcon icon={faCarSide} /> Yetkazib berish Toshkent bo'yicha</Text>
                    <Text fontWeight={700} color={"red.500"} ><FontAwesomeIcon icon={faXmark} /> Yetkazib berish tekin emas!</Text>
                </Box>
                <Box mt={"35px"} display={"flex"} justifyContent={"center"}>
                    <Link href={"/checkout"}>
                        <Button px={"30px"} bg={"#D79B00"} _hover={{bg: "#B88400"}} >Sotib olish! <FontAwesomeIcon style={{padding: "0 4px"}} icon={faShoppingCart} /> </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
}

export default Checkout