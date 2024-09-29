import React from "react"
import { Box, Typography } from "@mui/material"

const NotFoundPage: React.FC = () => {
    return (
        <Box height={"100vh"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <img
                className="notfoundimage"
                src="https://buy-movie-tickets-api.onrender.com/img/astronaut_with_magnifying_glass.png"
                alt="404notfound"
            />
            <Typography variant="h1" fontSize={"45px"} color="#2d2d2e">
                <span style={{ color: "#db2777" }}>404</span> Not Found
            </Typography>
        </Box>
    )
}

export default NotFoundPage