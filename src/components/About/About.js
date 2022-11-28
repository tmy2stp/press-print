import React from 'react'
import "./About.scss"
import BGstill from "../../assets/INFOABOUT.jpg"


function About() {
    return (
        <div className='background'>
            <div className='background__overlay'>
                <img className='background__image' src={BGstill}></img>

                <div className='background__content'>
                    <div className='copy__container'>
                        
                    </div>
                </div>
            </div>
        </div>






    )
}


export default About