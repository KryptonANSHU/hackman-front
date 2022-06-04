import React from 'react'
import Navbar from "../../components/Navbar"
import Card from "../../components/Card"
// import "../styles/card.css"
function profile(params) {
    // const cards=Card.map()
    return(
        <div className="flex flex-col">
        <Navbar />

        <div className="render-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>

        </div>
    )
}
export default profile