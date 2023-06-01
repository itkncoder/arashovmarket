import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Title = ({title, icon, desc}: {title: string, icon: string, desc: string}) => {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
            <Box display={"flex"} alignItems={"center"} gap={"2px"}>
                <Image style={{width: "20px", height: "20px"}} src={icon} alt={title} width={32} height={32} />
                <Text fontWeight={700} fontSize={"22px"} >{title}</Text>
            </Box>
            <Box mt={"-5px"} >
                <Text color={"#959595"} >{desc}</Text>
            </Box>
        </Box>
    )
}

export default Title