import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.scss";

function Login() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/host");
        }
    }, [user, loading]);

    return (
        <div className="login">
            <div className="login__container">
                <button className="login__google-button" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}

export default Login;