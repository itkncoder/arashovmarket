import { Box, Button, Text } from '@chakra-ui/react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const Card = () => {
    return (
        <Box position={"relative"} rounded={"12px"} w={"fit-content"} bg={"#111111"} border={"1px solid #494949"} p={"10px"} >
            <Box>
                <Image style={{width: "115px", height: "85px", borderRadius: "10px 10px 4px 4px"}} alt='siu' width={200} height={120} src={"https://foodbay.com/wiki/wp-content/uploads/2020/09/prev_6d7171.jpg"} />
            </Box>
            <Box>
                <Text pt={"3px"} fontSize={"14px"} fontWeight={700}>Mol go'shti</Text>
                <Text fontSize={"11px"} mt={"-3px"} color={"#959595"} >Lorem ipsum dolor...</Text>
            </Box>
            <Box mt={"5px"} display={"flex"} justifyContent={"space-between"} alignItems={"end"} >
                <Box>
                    <Text fontSize={"12px"} >1<span style={{color: "#D79B00"}} >kg</span></Text>
                    <Text mt={"-3px"} fontSize={"11px"} >140.<span style={{fontSize: "8px", color: "#959595"}} >000</span><span style={{fontSize: "11px", color: "#D79B00"}} > so'm</span></Text>
                </Box>
                <Box m={"0 0 2.5px 0"} >
                    <Button p={"4px 6px"} _hover={{bg: "#B88400"}} rounded={"3.5px"} bg={"#D79B00"} height={"fit-content"} width={"fit-content"} size={"xs"} >
                        <Text fontSize={"8px"} pr={"2px"} >Savatga</Text>
                        <FontAwesomeIcon style={{fontSize: "8px"}} icon={faShoppingCart} />
                    </Button>
                </Box>
            </Box>
            <Box bg={"#D79B00"} shadow={"lg"} top={"5px"} rounded={"2px"} p={"0 2px"} right={"5px"} position={"absolute"} >
                <Text fontSize={"8px"} >Yangi</Text>
            </Box>
        </Box>
    )
}

export default Card