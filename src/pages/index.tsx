import Category from '@/components/category/category'
import Layout from '@/layout/layout'
import { Box, Button, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from './_app'

const Index = () => {

    const {cartItems, setAllProducts} = useContext(Context)

    const [loader, setLoader] = useState(true)

    const [isAdded, setAdd] = useState(false)

    useEffect(() => {
        axios.get("https://arashovshopbot.onrender.com/api/products").then(res => {
            setAllProducts(res.data.data)
            setLoader(false)
        })
    }, [])

    useEffect(() => {
        setAdd(true)
        setTimeout(() => setAdd(false), 500)
    }, [cartItems])

    return (
        <Layout>
            <Box >
                <Box>
                        <Tabs isFitted variant='unstyled'>
                            <TabList>
                                <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Go'sht</Tab>
                                <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Somsa</Tab>
                                <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Shashlik</Tab>
                            </TabList>
                        {
                            !loader ?
                            <TabPanels>
                                <TabPanel p={"0"}>
                                    <Category titleName="Go'sht" titleIcon={"https://cdn-icons-png.flaticon.com/512/1046/1046769.png"} titleDesc={"Toza va halol!"} />
                                </TabPanel>
                                <TabPanel p={"0"}>
                                    <Category titleName="Somsa" titleIcon={"https://cdn-icons-png.flaticon.com/512/5207/5207519.png"} titleDesc={"Mazzali, Yog'li / Ko'k!"} />
                                </TabPanel>
                                <TabPanel p={"0"}>
                                    <Category titleName="Shashlik" titleIcon={"https://cdn-icons-png.flaticon.com/512/7450/7450605.png"} titleDesc={"Qiyma / Tovuq / Kuskavoy!"} />
                                </TabPanel>
                            </TabPanels>
                            :
                            <Box display={"flex"} height={"500px"} justifyContent={"center"} alignItems={"center"}>
                                <Spinner/>
                            </Box>
                        }
                        </Tabs>
                </Box>
                <Box position={"fixed"} w={"100%"} zIndex={10} bottom={"50px"} left={"50%"} transform={"translateX(-50%)"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Link href={"/cart"}>
                        <Button transition={".3s all"} ml={isAdded ? "25px" : "0"} px={"30px"} bg={"#D79B00"} _hover={{bg: "#B88400"}} >Savatni ko'rish <FontAwesomeIcon icon={faShoppingCart} style={{padding: "0 3px"}} /> </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index