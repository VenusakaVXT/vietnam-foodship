import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { topFoods } from "../../mocks/mockTopFood"
import CarouselItem from "./CarouselItem"

interface SliderSettings {
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
    autoplaySpeed: number,
    arrows: boolean
}

const Carousel: React.FC = () => {
    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    }

    return (
        <div>
            <Slider {...settings}>
                {topFoods.map(food => <CarouselItem image={food.image} title={food.title} />)}
            </Slider>
        </div>
    )
}

export default Carousel