import React from 'react'
import './HostModal.scss'
import rockyPic from '../../assets/MYBOY.jpg'

function closeModal() {
    const modalContainer = document.getElementById("modal__container");
    modalContainer.classList.add("closed");
}

function HostModal() {
    return (
        <div id="modal__container" className='modal__container closed'>
            <div className='modal__header'>
                <p>@RockysPrintShop</p>
                <span className='modal__close' onClick={closeModal}>X</span>
            </div>
            <div className='modal__content'>
                <div className='modal__body'>

                    <div className='modal__pic'>
                        <img className='modal__pup' src={rockyPic}></img>
                    </div>

                    <h1 className='modal__body--title'>Online <span className='rocky__star'>|⭐️⭐️⭐️⭐️⭐️  (288)</span> </h1>
                    <p className='modal__body--copy'>Hi I'm Rocky The Print Pup!<br></br>Send me a message, and lets connect about your project!<br></br>
                    <button className='modal__form--button'>Message Rocky </button>
                    </p>
               
                </div>
                <div className='modal__form'></div>

      






                <div className='modal__footer'>
                    <button className='modal__buttonclose'>Place Order</button>
                </div>
            </div>
        </div>
    )
}


export default HostModal