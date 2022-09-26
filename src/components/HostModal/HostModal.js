import React from 'react'
import './HostModal.scss'
import rockyPic from '../../assets/MYBOY.jpg'


function HostModal() {
    return (
        <div className='modal__container'>
            <div className='modal__header'>
                <p>@RockysPrintShop</p>
                <span className='modal__close'>X</span>
            </div>
            <div className='modal__content'>
                <div className='modal__body'>

                    <div className='modal__pic'>
                        <img className='modal__pup' src={rockyPic}></img>
                    </div>

                    <h1 className='modal__body--title'>Online <span className='rocky__star'>|⭐️⭐️⭐️⭐️⭐️  (288)</span> </h1>
                    <p className='modal__body--copy'>Hi I'm Rocky!<br></br>Pickup At My Pawfice!</p>
                </div>
                <div className='modal__form'>

                    <form>
                        <label><input placeholder="Order Quantity / Notes" type="text" /></label>
                        <button className='modal__form--button'>Submit</button>
                    </form>
                </div>

                Radio button <br></br>
                Radio button <br></br>
                Radio button 





                <div className='modal__footer'>
                    <button className='modal__buttonclose'>Close</button>
                </div>
            </div>
        </div>
    )
}


export default HostModal