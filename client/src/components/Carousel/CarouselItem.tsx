import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CarouselItemProps {
    image: string,
    title: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, title }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img
                className="w-[10rem] h-[8rem] lg:h-[10rem] lg:w[14rem] rounded-full object-cover object-center"
                src={image}
                alt={title}
            />
            <span className="py-5 font-sans text-xl text-gray-400">{title}</span>
        </div>
    )
}

export default CarouselItem