import { Box, Button, Text } from '@chakra-ui/react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const Card = () => {
    return (
        <Box position={"relative"} rounded={"12px"} w={"fit-content"} bg={"#111111"} border={"1px solid #494949"} p={"8px"} >
            <Box>
                <Image style={{width: "155px", height: "115px", borderRadius: "10px 10px 4px 4px"}} alt='siu' width={200} height={150} src={"https://foodbay.com/wiki/wp-content/uploads/2020/09/prev_6d7171.jpg"} />
            </Box>
            <Box>
                <Text pt={"3px"} fontWeight={700} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"120px"} >Mol go'shti</Text>
                <Text fontSize={"13px"} mt={"-3px"} color={"#959595"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} maxW={"130px"} >Lorem ipsum dolor sit amet</Text>
            </Box>
            <Box mt={"5px"} display={"flex"} justifyContent={"space-between"} alignItems={"end"} >
                <Box>
                    <Text fontSize={"18px"} >1<span style={{color: "#D79B00"}} >kg</span></Text>
                    <Text fontSize={"15px"} mt={"-3px"} >140.<span style={{fontSize: "12px", color: "#959595"}} >000</span><span style={{fontSize: "13px", color: "#D79B00"}} > so'm</span></Text>
                </Box>
                <Box m={"0 0 2.5px 0"} >
                    <Button p={"4px 8px"} _hover={{bg: "#B88400"}} rounded={"3.5px"} bg={"#D79B00"} height={"fit-content"} width={"fit-content"} size={"sm"} >
                        <Text fontSize={"12px"} pr={"2px"} >Savatga</Text>
                        <FontAwesomeIcon style={{fontSize: "10px"}} icon={faShoppingCart} />
                    </Button>
                </Box>
            </Box>
            <Box bg={"#D79B00"} shadow={"lg"} top={"5px"} rounded={"3px"} p={"0 6px"} right={"6px"} position={"absolute"} >
                <Text fontSize={"12px"} >Yangi</Text>
            </Box>
        </Box>
    )
}

export default Card