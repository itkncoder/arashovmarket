import Category from '@/components/category/category'
import Layout from '@/layout/layout'
import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Index = () => {
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
                    </Tabs>
                </Box>
                <Box position={"fixed"} zIndex={10} bottom={"35px"} left={"50%"} transform={"translateX(-50%)"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Link href={"/cart"}>
                        <Button px={"30px"} bg={"#D79B00"} _hover={{bg: "#B88400"}} >Savatni ko'rish <FontAwesomeIcon style={{padding: "0 2px"}} icon={faShoppingCart} /> </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index