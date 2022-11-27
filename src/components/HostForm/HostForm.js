import './HostForm.scss';
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const HostForm = () => {
    // const auth = getAuth();
    // const user = auth.currentUser;
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (user) {
    //         // User is signed in.
    //     } else {
    //         navigate("/login");
    //     }
    // }, []);


    const [message, setMessage] = useState('');
    const { handleSubmit, reset } = useForm();
    const API_URL = "https://press-print-api.herokuapp.com/printers";

    const onSubmit = async (data, e) => {
        e.preventDefault();
        axios.post((API_URL), {
            description: e.target[0].value,
            handle: e.target[1].value,
            latitude: e.target[2].value,
            longitude: e.target[3].value
        })
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setMessage("Host added to the map!");
        reset();
    };

    return (
        <div className='form__container'>
            <form className="host__form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="form__description" className="host__label">Describe your printer</label>
                <input type="text" id="form__description" className="host__text-input-box" placeholder="Describe your printer"></input>
                <label htmlFor="form__handle" className="host__label">Add your handle</label>
                <input id="form__handle" className="host__text-input-box" placeholder="Your handle"></input>
                <label htmlFor="form__lat" className="host__label">Add your latitude</label>
                <input id="form__lat" className="host__text-input-box" placeholder="Your latitude"></input>
                <label htmlFor="form__lon" className="host__label">Add your longitude</label>
                <input id="form__lon" className="host__text-input-box" placeholder="Your longitude"></input>
                {message}
                <button type="submit" className="host__btn">
                    HOST!
                </button>
                <Link to="/" className="host__cancel"><button className="host__cancel-btn">
                    CANCEL
                </button></Link>
            </form>
        </div>
    );
};

export default HostForm