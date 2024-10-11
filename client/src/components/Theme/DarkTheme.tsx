import { createTheme } from "@mui/material"

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#db2777" },
        secondary: { main: "#5a20cb" },
        background: { default: "#0d0d0d", paper: "#0d0d0d" }
    }
})