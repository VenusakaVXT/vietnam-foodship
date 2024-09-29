import React from "react"
import "../../scss/HomePage.scss"
import "../../scss/App.scss"
import Carousel from "../Carousel/Carousel"
import { restaurants } from "../../mocks/mockRestaurant"
import RestaurantCard from "../Restaurant/RestaurantCard"

const HomePage: React.FC = () => {
    return (
        <div className="homepage__wrapper">
            <section className="homepage__banner -z-50 releative flex flex-col justify-center items-center">
                <div className="w-[50vw] z-10 text-center">
                    <div className="container">
                        <h1 className="content" style={{ color: "#fff" }}>VietNam FoodShip</h1>
                    </div>
                    {/* <p className="text-2xl lg:text-6xl z-10 py-5">
                        <Logo
                            width={"100%"}
                            height={"100%"}
                            fontSize="80px"
                            bgColor="transparent"
                            color="#fff"
                            lineDown={true}
                        />
                    </p> */}
                    <p className="z-10 text-gray-300">
                        VietNam FoodShip đồng hành cùng Ẩm Thực Việt Nam
                    </p>
                </div>
                <div className="homepage__banner-cover absolute left-0 right-0">

                </div>
                <div className="homepage__banner-fadout">

                </div>
            </section>
            <section className="p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-sans text-gray-400 py-3 pb-10">Top Foods</p>
                <Carousel />
            </section>
            <section className="px-5 lg:px-20 pb-10">
                <h1 className="text-2xl font-sans text-gray-400 py-3 pb-7">
                    Các Cửa Hàng Phổ Biến
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {restaurants.map(item => <RestaurantCard
                        name={item.name}
                        address={item.address}
                        image={item.image}
                        isOpen={item.isOpen}
                        liked={item.liked}
                    />)}
                </div>
            </section>
        </div>
    )
}

export default HomePage