import Card from "@/components/card/card"
import Layout from "@/layout/layout"
import { Box, Button, Input, Text } from "@chakra-ui/react"
import { faBasketShopping, faCarSide, faCreditCard, faHouse, faPerson, faRightFromBracket, faShoppingCart, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { Context } from "./_app"
import axios from "axios"
import { useRouter } from "next/router"

const Checkout = () => {
    const { cartItems } = useContext(Context)

    const router = useRouter()

    const [count, setCount] = useState<number>(0)

    const [inputs, setInputs] = useState<any>([])

    const onSubmit = async () => {
        const TOKEN = '6000922294:AAHr4rI5VSOakOJbnBZzEwEUoJ_CmPhHp9A'
        const CHAT_ID = '-1001846106004'
        const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'
    
        let mes = `<b>#zakaz</b>\n`

        cartItems.map((i: any) => {
            mes += `<b>-- ${i.title} - ${i.counter} - ${i.price}</b>\n`
        })

        mes += `\n<b>Ism: ${inputs.ism}</b>\n`
        mes += `<b>Familiya: ${inputs.familiya}</b>\n`
        mes += `<b>Nomer: ${inputs.nomer}</b>\n`
        mes += `<b>Manzil: ${inputs.manzil}</b>\n`
        mes += `<b>Username: ${inputs.username}</b>\n\n`

        mes += `<b>Tolov turi: Naqd</b>\n`
        mes += `<b>To'liq narx: ${count} so'm</b>\n`
    
        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: mes
        })
        
        router.push("/")
    }

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
                    <Text fontSize={"20px"} fontWeight={700} ><FontAwesomeIcon icon={faShoppingCart} /> Tasdiqlash:</Text>
                    <Box display={"flex"} gap={"8px"} justifyContent={"end"} alignItems={"center"}>
                        <Link href={"/"}>
                            <Button size={"sm"} display={"flex"} justifyContent={"center"} gap={"5px"} alignItems={"center"} >Asosiy <FontAwesomeIcon icon={faHouse} /></Button>
                        </Link>
                        <Link href={"/cart"}>
                            <Button size={"sm"} display={"flex"} justifyContent={"center"} gap={"5px"} alignItems={"center"} >Savatcha <FontAwesomeIcon icon={faShoppingCart} /></Button>
                        </Link>
                    </Box>
                </Box>
                <Box mb={"20px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"15px"} fontWeight={700} ><FontAwesomeIcon icon={faBasketShopping} /> Maxsulotlar: {cartItems.length}ta</Text>
                    <Text fontSize={"15px"} fontWeight={700}><FontAwesomeIcon icon={faCreditCard} /> To'liq narx: {count} so'm</Text>
                </Box>
                <Box my={"25px"} border={"2px solid #222"} p={"10px 20px"} rounded={"lg"} >
                    <Text fontWeight={700} >Savatcha:</Text>
                    {
                        cartItems.map((i: any) => (
                            <Box>
                                <Text textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"320px"} fontSize={"15px"} fontWeight={500} >- {i.title}: {i.counter}ta - {i.price} so'm</Text>
                            </Box>
                        ))
                    }
                </Box>
                <Box mb={"25px"} display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"}>
                    <Box display={"flex"} w={"100%"} justifyContent={"start"} >
                        <Text mb={"-10px"} fontWeight={700} fontSize={"20px"} color={"#D79B00"} >To'ldiring:</Text>
                    </Box>
                    <Input onChange={e => setInputs({...inputs, ism: e.target.value})} placeholder="Ismingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input onChange={e => setInputs({...inputs, familiya: e.target.value})} placeholder="Familiyangiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input onChange={e => setInputs({...inputs, nomer: e.target.value})} type="number" placeholder="Telefon raqamingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input onChange={e => setInputs({...inputs, manzil: e.target.value})} placeholder="Manzilingiz..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                    <Input onChange={e => setInputs({...inputs, username: e.target.value})} placeholder="@Telegram Username..." w={"100%"} border={"1px solid rgba(256, 256, 256, 0.1)"} variant={"filled"} />
                </Box>
                <Box>
                    <Box mb={"20px"}>
                        <Text fontSize={"18px"} fontWeight={700}><FontAwesomeIcon style={{width: "35px"}} icon={faUser} /> Adminlarimiz aloqaga chiqishadi!</Text>
                    </Box>
                    <Text fontWeight={700}><FontAwesomeIcon style={{width: "35px"}} icon={faCarSide} /> Yetkazib berish Toshkent bo'yicha</Text>
                    <Text fontWeight={700} color={"red.500"} ><FontAwesomeIcon style={{width: "35px"}} icon={faXmark} /> Yetkazib berish tekin emas!</Text>
                </Box>
                <Box mt={"35px"} display={"flex"} justifyContent={"center"}>
                    <Link href={"/checkout"}>
                        <Button onClick={onSubmit} px={"30px"} bg={"#D79B00"} _hover={{bg: "#B88400"}} >Sotib olish! <FontAwesomeIcon style={{padding: "0 4px"}} icon={faShoppingCart} /> </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
}

export default Checkout