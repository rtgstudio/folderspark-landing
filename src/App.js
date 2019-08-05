import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Routes from './Routes'
import Slider from './components/slider'

const App = () => {
    return(
        <>
            <Navbar />
            <Slider />
            <Routes />
        </>
    )
}

export default App
