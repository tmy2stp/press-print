import React from 'react'
import './Landing.scss'
import videoBG from '../../assets/TOMBG.mp4'

function Landing() {
    return (
        <>
            <div className='main'>
                <div className='overlay'>
                    <video src={videoBG} autoPlay loop muted />
                    <div className='content'>
                    <div className='main__extruded'><h2 className='main__extruded--1'>Print</h2></div>
                        <h1 className='content__h1'>Nimble, Secure.</h1>
                        <div className='content__buttons'>
                            <button className='button__print'>👀</button>
                            <button className='button__host'>🖨</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Landing