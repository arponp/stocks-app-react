import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../user/UserContext';

function Login() {
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            const { data } = await axios.post(
                'http://localhost:4000/users/login',
                {
                    email,
                    password,
                }
            );
            if (data.token) {
                console.log(data.token);
                setUser({
                    name: data.name,
                    email: data.email,
                    token: data.token,
                });
            }
        } else {
            setError('Fill out all fields');
        }
    };
    return (
        <>
            {user && <Redirect to="/portfolio" />}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>{error}</div>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div></div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div></div>
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
