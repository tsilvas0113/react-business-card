import React from "react";
import Ficon from '../Icons/Facebook Icon.png'
import Gicon from '../Icons/GitHub Icon.png'
import Iicon from '../Icons/Instagram Icon.png'
import Ticon from '../Icons/Twitter Icon.png'

function Footer () {
    return (
        <div className="footer-container">
            <img className="tw icon" src={Ticon} alt='Twitter' />
            <img className="fb icon" src={Ficon} alt='Facebook' />
            <img className="in icon" src={Iicon} alt='Instagram' />
            <img className="gh icon" src={Gicon} alt='GitHub' />
        </div>
    )
}

export default Footer