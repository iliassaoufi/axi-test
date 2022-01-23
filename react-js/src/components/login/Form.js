import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/AuthSlice'
import './login.css';
import FormError from '../utils/FormError';

export default function Form() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState([]);

    const data = {
        "email": "test@gmail.com",
        "password": "123456",
    };

    const validation = () => {
        let er = [];
        if (!email)
            er.push("Email is required")
        if (!password)
            er.push("Password is required")
        return er;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation().length > 0) {
            setErrors(validation());
        }
        else {
            setErrors([]);
            const user = {
                "email": email,
                "password": password,
            }
            if (user.email === data.email && user.password === data.password) {
                setErrors([]);
                dispatch(setUser(data));
                history.push("/home");
            }
            else {
                setErrors(["email or password is wrong"]);
            }
        }

    }
    return (
        <div className='login-form-content'>
            <h1>AXI Store</h1>
            <form onSubmit={handleSubmit} >
                <div className='input-with-icon'>
                    <i className='fas fa-user'></i>
                    <input
                        type='email'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-with-icon'>
                    <i class="fas fa-lock"></i>
                    <input
                        type='password'
                        placeholder='Your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <FormError errors={errors} />
                <button className='btn-pr' type='submit' >login</button>
                <p>
                    If you dont have account :
                    <Link> Sign Up </Link>
                </p>

            </form>
        </div>
    );
}

