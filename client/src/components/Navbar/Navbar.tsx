import React from "react"
import Logo from "../Logo/Logo"
import { AppBar, Avatar, Badge, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { randomColor } from "../../util"
import { Tooltip } from "react-tooltip"
import { useNavigate } from "react-router-dom"

const Navbar: React.FC = () => {
    const navigate = useNavigate()

    return (
        <AppBar position="sticky">
            <div className="sticky px-5 z-50 py-[.8rem] bg-[#db2777] lg:px-20 flex justify-between">
                <div className="lg:mr-10 cursor-pointer flex items-center space-x-4" onClick={() => navigate("/")}>
                    <Logo width={210} height={"100%"} fontSize="30px" bgColor="transparent" color="#fff" lineDown={true} />
                </div>
                <div className="flex items-center space-x-2 lg:space-x-10">
                    <div>
                        <IconButton data-tooltip-id="search">
                            <SearchIcon sx={{ fontSize: "1.5rem" }} />
                        </IconButton>
                        <Tooltip className="tooltip" id="search" place="bottom" content="Search..." />
                    </div>
                    <div>
                        <IconButton data-tooltip-id="cart">
                            <Badge color="error" badgeContent={4}>
                                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                            </Badge>
                        </IconButton>
                        <Tooltip className="tooltip" id="cart" place="bottom" content="Cart" />
                    </div>
                    <div data-tooltip-id="avt">
                        <Avatar sx={{ bgcolor: randomColor, color: "#fff" }}>XT</Avatar>
                        <Tooltip className="tooltip" id="avt" place="bottom" content="User Profile" />
                    </div>
                </div>
            </div>
        </AppBar>
    )
}

export default Navbar