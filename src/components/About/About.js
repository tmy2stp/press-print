import React from 'react'
import "./About.scss"
import BGstill from "../../assets/BGSTILL.jpg"


function About() {
    return (
      
        <div className='backround'>
            <div className='backround__overlay'>
                <img className='backround__image' src={BGstill}></img>

                <div className='backround__content'>
                    <h1 className='backround__header'>About</h1>
                    <p className='backround__copy'>A friend with a printer is worth 8 regular friends.</p>
                </div>

            </div>
        </div>
    )
}


export default About