import React from "react"
import mainImage from "/images/Rectangle-90.png"

function Header() {
    return(
        <header>
            <figure><img src={mainImage} alt="woman smiling"/></figure>
            <div className="header_info">
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <span>laurasmith.website</span>
            <div className="button_container">
                <a className="email" href="javascript:;">Email</a>
                <a className="linkedin" href="javascript:;">LinkedIn</a>
            </div>
            </div>
        </header>
    )
}

export default Header