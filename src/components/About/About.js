import React from 'react'
import "./About.scss"
import BGstill from "../../assets/BGSTILL.jpg"


function About() {
    return (
        <div className='background'>
            <div className='background__overlay'>
                <img className='background__image' src={BGstill}></img>

                <div className='background__content'>
                    <h1 className='background__header'>About</h1>
                    <div className='copy__container'>
                        <p className='background__copy'>A friend with a printer is worth 8 regular friends. <br></br>

                            How many people in your building have a working printer?
                            Press Print strives to connect and empower urban working people with drama free document services, using existing hardware.
                            <br></br>
                            With 64% of North American Households owning a working printer (Cite), Press Print connects owners, or 'hosts' with locals looking to print a wide range of documents.
                            Hosts can put that sleeping hardware to work, and earn some extra cash, while busy professionals can save a trip to the harshly-lit big box stores.
                            <br></br>
                            With a minimal exchange of information, and state of the art encryption, you can be certain your privacy is a priority.
                            <br></br>
                            And with 10% of net profits funding CJFE Canadian Journalists Free Expression, Press Print is committed to protecting the spirit of civil liberty via unmitigated access to information.
                        </p>
                    </div>
                </div>
            </div>
        </div>






    )
}


export default About