import React from "react"
import "../../scss/Logo.scss"

interface LogoProps {
    width: number | string
    height: number | string
    fontSize: string
    bgColor: string
    color: string
    lineDown: boolean
}

const Logo: React.FC<LogoProps> = ({ width, height, fontSize, bgColor, color, lineDown }) => {
    return (
        <>
            <div style={{
                width,
                height,
                background: bgColor,
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1 className="app-name" style={{ fontSize, color }}>
                    {lineDown ? "VietNam FoodShip" : <>VietNam<br />FoodShip</>}
                </h1>
            </div>
        </>
    )
}

export default Logo