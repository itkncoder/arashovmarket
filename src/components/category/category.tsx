import Card from "../card/card"
import { Box } from "@chakra-ui/react"
import Title from "../title/title"

const Category = ({titleName, titleIcon, titleDesc}: {titleName: string, titleIcon: string, titleDesc: string}) => {
    return (
        <Box py={"25px"} >
            <Box display={"flex"} w={"100%"} justifyContent={"center"} mb={"10px"} >
                <Title title={titleName} icon={titleIcon} desc={titleDesc} />
            </Box>
            <Box display={"flex"} w={"100%"} justifyContent={"center"} >
                <Box display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"} >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Box>
            </Box>
        </Box>
    )
}

export default Category