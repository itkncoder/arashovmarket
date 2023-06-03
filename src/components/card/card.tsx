import { Context } from '@/pages/_app'
import { Box, Button, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure, } from '@chakra-ui/react'
import { faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useEffect, useId, useState } from 'react'

const Card = ({i, count}: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {setCartItems} = useContext(Context)

    const [counter, setCounter] = useState(1)

    const [priceItem, setPriceItem] = useState(i?.price)

    useEffect(() => {
        setPriceItem(i.price * counter)

        if (counter == -1) {
            setCounter(0)
        }
    }, [counter])

    const addToCart = () => {
        setCartItems((prev: object[]) => [{
            ...i,
            counter,
            price: i.price * counter,
            timestamp: new Date().getTime()
        }, ...prev])
        onClose()
    }

    const removeFromCart = () => {
        setCartItems((prev: any) => prev.filter((item: any) => i.timestamp != item.timestamp))
    }

    return (
        <Box position={"relative"} rounded={"12px"} w={"fit-content"} bg={"#111111"} border={"1px solid #494949"} p={"8px"} >
            <Box>
                <Image style={{width: "155px", height: "115px", objectFit: "cover", borderRadius: "10px 10px 4px 4px"}} alt='siu' width={200} height={150} src={i.image} />
            </Box>
            <Box>
                <Text pt={"3px"} fontWeight={700} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"150px"} >{i.title}</Text>
                <Text fontSize={"14px"} mt={"-3px"} color={"#959595"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"145px"} >{i.description}</Text>
            </Box>
            <Box mt={"5px"} display={"flex"} flexDirection={"column"} >
                <Box display={"flex"} gap={"8px"} justifyContent={"start"} alignItems={"center"} >
                    {!count && <Text fontSize={"18px"} >1<span style={{color: "#D79B00"}} >kg</span>:</Text>}
                    <Text fontSize={"15.5px"} >{!count ? i.price : i.price}<span style={{fontSize: "13px", color: "#D79B00"}} > so'm</span></Text>
                </Box>
                <Box m={"5px 0"} w={"100%"} >
                    <Button p={"4px 8px"} w={"100%"} position={"relative"} _hover={{bg: "#B88400"}} rounded={"3.5px"} bg={"#D79B00"} height={"fit-content"} size={"sm"} >
                        {
                            !count ?
                            <Box onClick={onOpen} py={"1px"} w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Text fontSize={"15px"} pr={"2px"} >Savatga</Text>
                                <FontAwesomeIcon  style={{fontSize: "10px"}} icon={faShoppingCart} />
                            </Box> :
                            <Box onClick={removeFromCart} py={"1px"} w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <Text fontSize={"15px"} pr={"2px"} >O'chirish</Text>
                                <FontAwesomeIcon  style={{fontSize: "15px"}} icon={faXmark} />
                            </Box>
                        }
                    </Button>
                </Box>
            </Box>
            {count && <Box bg={"#D79B00"} shadow={"lg"} top={"5px"} rounded={"3px"} p={"0 6px"} right={"6px"} position={"absolute"} >
                <Text fontSize={"15px"} >{count}ta</Text>
            </Box>}

            <>
                <Modal size={"xs"} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent pb={"20px"} bg={"#222"}>
                    <ModalHeader fontSize={"18px"} >{i.title}</ModalHeader>
                        <ModalCloseButton />

                        <ModalBody>
                            <Box>
                                <Box display={"flex"} justifyContent={"center"} mt={"25px"}>
                                    <Image style={{width: "220px", height: "125px", objectFit: "cover", borderRadius: "10px 10px 4px 4px"}} alt='siu' width={250} height={150} src={i.image} />
                                </Box>
                                <Box mt={"8px"} mb={"4px"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                                    <Text fontWeight={700} fontSize={"18px"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"160px"} >{i.title}</Text>
                                    <Text color={"#959595"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"160px"} >{i.description}</Text>

                                    <Box mt={"10px"} pr={"15px"} w={"100%"} display={"flex"} justifyContent={"end"}>
                                        <Text color={"white"} fontWeight={700} >{priceItem} so'm</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                                <Box display={"flex"} justifyContent={"center"} gap={"8px"} >
                                    <Button size={"sm"} onClick={() => setCounter(prev => prev - 1)}>-</Button>
                                    <Button size={"sm"}>{counter}</Button>
                                    <Button size={"sm"} onClick={() => setCounter(prev => prev + 1)}>+</Button>
                                </Box>
                                <Button onClick={addToCart} bg={"#D79B00"} _hover={{bg: "#B88400"}} h={"fit-content"} py={"6px"} color={"white"} size={"md"} mr={3}>Qo'shish  <FontAwesomeIcon icon={faShoppingCart} /> </Button>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </>
        </Box>
    )
}

export default Card