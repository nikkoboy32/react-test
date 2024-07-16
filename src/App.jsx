import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container">
      <div className="business_card">
          <Header/>
          <MainContent/>
          <Footer/>
      </div>
    </div>
  )
}

export default App