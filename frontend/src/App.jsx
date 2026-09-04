import React from "react"
import Header from "./layouts/Header"
import Footer from "./layouts/footer"
import { Outlet } from "react-router-dom"

function App () {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App