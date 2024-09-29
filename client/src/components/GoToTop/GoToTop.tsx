import React, { useState, useEffect } from "react"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Tooltip } from "react-tooltip"
import "../../scss/GoToTop.scss"

const GoToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect((): (() => void) => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = (): void => {
        setIsVisible(window.scrollY > 100)
    }

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleClick = (): void => {
        scrollToTop()
        document.querySelector(".go-to-top-btn")?.classList.add("go-down-animation")
    }

    return (
        <>
            {isVisible && (
                <button
                    className="go-to-top-btn bottom-up-animation"
                    data-tooltip-content="Go To Top"
                    data-tooltip-id="gtt"
                    onClick={() => handleClick()}
                >
                    <KeyboardArrowUpIcon fontSize="large" style={{
                        position: "relative",
                        right: "7px",
                        bottom: "7px",
                    }} />
                </button>
            )}

            <Tooltip className="tooltip" id="gtt" place="top-end" />
        </>
    )
}

export default GoToTop