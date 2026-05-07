// import { Routes, Route, Link } from "react-router-dom"
// import { useEffect, useState } from 'react'

function Welcome() {

    return(

        <div className="container">

            <div className="home-title">
                <h1>Rich or Poor.</h1>
                <h1>How Are We Born?</h1>
            </div>

            <p className="home-subtitle">
                You can create the perfect world, but it will impact your life.            
            </p>

            <button className="animated-button-capsule">

                    Start

            </button>

        </div>
    )
}


function MyApp() {

    return(


        <div>

            <Welcome />


        </div>
    )
}

export default MyApp