import React from "react"
import { Box, Card, Chip, IconButton } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { Link } from "react-router-dom"
import { getSlugify } from "../../util"

interface RestaurantCardProps {
    name: string,
    address: string,
    image: string,
    isOpen: boolean,
    liked: boolean
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, address, image, isOpen, liked }) => {
    return (
        <Card className="w-[17.5rem]" sx={{ ":hover": { transform: "translateY(-2px)" } }}>
            <Box component={Link} to={`/restaurant/${getSlugify(name)}/detail`} className="cursor-pointer relative">
                <img
                    className="w-full h-[10rem] rounded-t-md object-cover"
                    src={image}
                    alt={name.toLowerCase()}
                />
                <Chip
                    size="small"
                    className="absolute top-2 left-2"
                    color={isOpen ? "success" : "error"}
                    label={isOpen ? "open" : "closed"}
                />
            </Box>
            <div className="p-4 textPart lg:flex w-full justify-between">
                <div className="space-y-1">
                    <p className="font-sans text-lg">{name}</p>
                    <p className="text-gray-500 text-sm" style={{
                        height: "40px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden"
                    }}>
                        {address}
                    </p>
                </div>
                <div>
                    <IconButton>
                        {liked ? <FavoriteIcon htmlColor="#db2777" /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </div>
        </Card>
    )
}

export default RestaurantCard