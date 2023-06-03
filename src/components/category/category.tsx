import Card from "../card/card"
import { Box } from "@chakra-ui/react"
import Title from "../title/title"
import { useContext } from "react"
import { Context } from "@/pages/_app"

const Category = ({titleName, titleIcon, titleDesc}: {titleName: string, titleIcon: string, titleDesc: string}) => {

    const {allProducts} = useContext(Context)

    return (
        <Box py={"25px"} >
            <Box display={"flex"} w={"100%"} justifyContent={"center"} mb={"10px"} >
                <Title title={titleName} icon={titleIcon} desc={titleDesc} />
            </Box>
            <Box display={"flex"} w={"100%"} justifyContent={"center"} >
                <Box display={"flex"} flexFlow={"row wrap"} gap={"15px 10px"} justifyContent={"center"} >
                    {
                        allProducts.map((i: any) => {
                            if (titleName == i.category) {
                                return <Card i={i} />
                            }
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Category