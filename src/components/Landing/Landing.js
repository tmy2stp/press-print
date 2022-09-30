import React from 'react'
import './Landing.scss'
import videoBG from '../../assets/BGlight.mp4'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div className='main'>
                <div className='overlay'>
                    <video src={videoBG} autoPlay loop muted />
                    <div className='content'>
                        <h1 className='content__h1'>Nimble, Secure.</h1>
                        <div className='content__buttons'>
                            <Link to="/print"><button className='button__print'>Print</button></Link>
                            <Link to="/host"><button className='button__host'>Host</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Landing