import Card from '@/components/card/card'
import Category from '@/components/category/category'
import Title from '@/components/title/title'
import Layout from '@/layout/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
    return (
        <Layout>
            <Box>
                <Box>
                    <Category titleName="Go'sh" titleIcon={"https://cdn-icons-png.flaticon.com/512/1046/1046769.png"} titleDesc={"Toza va halol!"} />
                    <Category titleName="Somsa" titleIcon={"https://cdn-icons-png.flaticon.com/512/5207/5207519.png"} titleDesc={"Mazzali, Yog'li / Ko'k!"} />
                    <Category titleName="Shashlik" titleIcon={"https://cdn-icons-png.flaticon.com/512/7450/7450605.png"} titleDesc={"Qiyma / Tovuq / Kuskavoy!"} />
                </Box>
            </Box>
        </Layout>
    )
}

export default Index