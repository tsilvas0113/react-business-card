import React from "react";
import pic from '../113.png'

function Info () {
    return (
        <div className="info-section">
            <img className="info-pic" src={pic} alt='profile-picture' />
            <div className="info-box">
                <div className="name">Tristan Silvas</div>
                <div className="job">Frontend Developer</div>
                <div className="site">tristansilvas.website</div>
                <div className="info-btns">
                    <button className="email btn"><span className="email-icon"></span>Email</button>
                    <button className="linkedin btn"><span className="linkedin-icon"></span>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Info