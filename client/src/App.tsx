import React from "react"
import "./scss/App.scss"
import Navbar from "./components/Navbar/Navbar"
import { ThemeProvider } from "@emotion/react"
import { darkTheme } from "./components/Theme/DarkTheme"
import { CssBaseline } from "@mui/material"
import HomePage from "./components/HomePage/HomePage"
import CopyrightIcon from "@mui/icons-material/Copyright"
import GoToTop from "./components/GoToTop/GoToTop"
import { Routes, Route } from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"

const App: React.FC = () => {
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <section className="footer py-5 text-center bg-black border-t-2 border-t-white">
                    <CopyrightIcon />Copyright by VenusakaVXT 2021-{new Date().getFullYear()}
                </section>
                <GoToTop />
            </ThemeProvider>
        </div>
    )
}

export default App