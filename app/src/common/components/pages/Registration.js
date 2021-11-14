import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveAuthUser } from '../../redux/resources/authResources';

const Registration = () => {

    const dispatch = useDispatch()
    const { authInfo } = useSelector((state) => state)

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
    }, [dispatch]);

    const onSubmit = () => {
        if (password !== confirmPassword) {
            alert("password doesn't match")
        } else if (password.length<8) {
            alert("password can't be less than 8")
        } else {
            dispatch(saveAuthUser({
                "email": email,
                "password": password,
                "username": username
            }));
        }
    }

    console.log(email)
    console.log(username)
    console.log(password)
    console.log(confirmPassword)

    return (
        <div>
            <p>Registration</p>
            <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
            <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <input type="password" name="confirmPassword" placeholder="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
            <button onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Registration;