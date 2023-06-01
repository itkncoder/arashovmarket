import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Card from "../card/card"
import { Box } from "@chakra-ui/react"
import Title from "../title/title"

const Category = ({titleName, titleIcon, titleDesc}: {titleName: string, titleIcon: string, titleDesc: string}) => {
    return (
        <Box py={"25px"} >
            <Box mb={"10px"} >
                <Title title={titleName} icon={titleIcon} desc={titleDesc} />
            </Box>
            <Swiper slidesPerView={3.1} className="category">
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}

export default Category