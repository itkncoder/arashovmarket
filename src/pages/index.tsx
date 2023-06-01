import Category from '@/components/category/category'
import Layout from '@/layout/layout'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
    return (
        <Layout>
            <Box>
                <Box>
                    <Tabs isFitted variant='unstyled'>
                        <TabList>
                            <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Go'sht</Tab>
                            <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Somsa</Tab>
                            <Tab borderRadius={"6px"} _selected={{bg: '#D79B00', borderRadius: "6px" }}>Shashlik</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Category titleName="Go'sh" titleIcon={"https://cdn-icons-png.flaticon.com/512/1046/1046769.png"} titleDesc={"Toza va halol!"} />
                            </TabPanel>
                            <TabPanel>
                                <Category titleName="Somsa" titleIcon={"https://cdn-icons-png.flaticon.com/512/5207/5207519.png"} titleDesc={"Mazzali, Yog'li / Ko'k!"} />
                            </TabPanel>
                            <TabPanel>
                                <Category titleName="Shashlik" titleIcon={"https://cdn-icons-png.flaticon.com/512/7450/7450605.png"} titleDesc={"Qiyma / Tovuq / Kuskavoy!"} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Layout>
    )
}

export default Index