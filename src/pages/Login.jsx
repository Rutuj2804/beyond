import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { setUserAuth } from "../store/auth";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setUserAuth(username))
    }

    useEffect(()=>{
        if(isAuthenticated) navigate("/")
    }, [isAuthenticated])

    return (
        <div className="auth__Wrapper">
            <div className="box">
                <div className="top">
                    <Logo />
                </div>
                <div className="body">
                    <form onSubmit={handleSubmit}>
                        <div className="inputDiv">
                            <input
                                type="text"
                                required
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                autoFocus
                            />
                            <label>Username</label>
                        </div>
                        <div className="inputDiv">
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="buttons">
                            <Button type="submit">Login</Button>
                        </div>
                    </form>
                </div>
                <div className="footer">
                    <p>Dont have an account? <span>Register Now</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
