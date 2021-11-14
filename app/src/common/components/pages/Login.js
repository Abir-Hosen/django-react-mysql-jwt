import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../redux/resources/authResources';

function Login() {

    const dispatch = useDispatch()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {

        dispatch(userLogin({
            email,
            password
        }));

    }


    console.log(email)
    console.log(password)


    return (
        <div>
            <p>Login</p>
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            /><br /><br />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            /><br /><br />
            <button onClick={handleSubmit} type="submit">Login</button>
        </div>
    )
}

export default Login;