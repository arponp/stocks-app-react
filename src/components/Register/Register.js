import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import UserContext from '../../user/UserContext';

const Register = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [duplicatePassword, setDuplicatePassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (name && email && password && duplicatePassword) {
                if (password == duplicatePassword) {
                    setError('');
                    const { data, status } = await axios.post(
                        'http://localhost:4000/users',
                        {
                            name,
                            email,
                            password,
                        }
                    );
                    if (status != 201) {
                        setError('Registration error');
                        return;
                    }
                    setUser({
                        name: data.user.name,
                        email: data.user.email,
                        token: data.token,
                    });
                } else {
                    setError('Make sure both passwords match');
                    return;
                }
            } else {
                setError('Please fill out all values');
                return;
            }
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <div>
            {user && <Redirect to="/portfolio" />}
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <div />
                <input
                    name="email"
                    type="text"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div />
                <input
                    name="duplicate-password"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setDuplicatePassword(e.target.value)}
                />
                <div>{error}</div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
