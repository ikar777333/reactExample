import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Header text="test" />
            <MainContent />
            <Footer test={{text:"test"}}/>
        </div>
    )
}

export default App
