import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../redux/AuthSlice'
import './Header.css';

export default function Header() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogoutClick = () => {
        dispatch(deleteUser());
        history.push("/login");
    }
    return (
        <div className='header'>
            <div className='main-nav'>
                <button>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className='logo'>
                AXI Store<span>.</span>
            </div>
            <div className='short-nav'>
                <button className='logout' onClick={handleLogoutClick}>
                    Logout
                    <i className="fas fa-user"></i>
                </button>
                <button>
                    <i className="fas fa-shopping-bag"></i>
                </button>
            </div>
        </div>
    );
}
