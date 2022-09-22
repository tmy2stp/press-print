import React from 'react'
import './Landing.scss'
import videoBG from '../../assets/BGBGBG.mp4'

function Landing() {
    return (
        <>
            <div className='main'>
                <div className='overlay'> 
                <video src={videoBG} autoPlay loop muted />

                <div className='content'>
                    <h1>Nimble, Secure.</h1>
                    <h2>Community Cloud Printing </h2>
                    <button className='button__print'>Print</button> <button className='button__host'>Host</button>
                    
                </div>
            </div>
            </div>
        </>
    )
}


export default Landing