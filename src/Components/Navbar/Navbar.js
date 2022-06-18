import React, { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
//import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { padding } from '@mui/system';
//import LogoutIcon from '@mui/icons-material/Logout';
//import { useSelector, useDispatch } from 'react-redux'
//import { logOut } from '../../slices/userSlice'
import { useNavigate } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'; 
import  {auth, db}  from '../../firebaseConf'
import { getAuth, signOut } from "firebase/auth";

function Navbar() {

    const [isScrolled, setScrolled] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [user] = useAuthState(auth);

    const signOut = () => {
        auth.signOut().catch(alert)
    }
    //const d = useSelector(state => state.user)
    //const dispatch = useDispatch()
    //const navigate = useNavigate()

    useEffect(() => {
        if (isOpen == true) {
            if (isOpen2 == true) {
                setOpen(false)
                setOpen2(true)
            }
        }
        if (isOpen2 == true) {
            if (isOpen == true) {
                setOpen2(false)
                setOpen(true)
            }
        }
        

    }, [isOpen, isOpen2])

    // const signout = () => {
    //     localStorage.clear()
    //     dispatch(logOut())
    //     navigate('/login')
    // }

    const scrolled = () => {
        console.log(window.scrollY)
        if (window.scrollY > 30) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    let activeStyle = {
        textDecoration: "underline"
    };

    window.addEventListener('scroll', scrolled)

    return (
        <div className={isScrolled ? "Nav active" : "Nav"} >
            <div className="navName"><img style={{width: "100px"}} src="https://www.uwbengaluru.org/images/logo.jpg" alt="" /></div>
            <div className="list">
                <div className="item"> <NavLink to='/'  >Home</NavLink> </div>
                <div className="item"> <NavLink to='/dashboard' >Dashboard</NavLink> </div>
                <div className="item">
                  {
                    user ? <NavLink to='/login' onClick={signOut}>Logout</NavLink> : <NavLink to='/login'>Login</NavLink>
                  }
                </div>
                {/* {d.isLoggedIn ?
                    <div className="item"  ><AccountCircleIcon onClick={() => setOpen2(!isOpen2)} />
                        {isOpen2 &&
                            <div style={{ transition: "0.5s" }} className="account">
                                <p>Hi, {d.userObject.firstName}</p>
                                <hr />
                                <NavLink to='/profile'>My Profile</NavLink>
                                <hr />
                                <div className="signOut">
                                    <p onClick={signout} >Sign Out  </p>
                                    <LogoutIcon className='logoutIcon' />
                                </div>
                            </div>
                        }
                    </div>
                    : <div className="item"> <NavLink to='/login'>Login</NavLink> </div>

                } */}
            </div>
        </div>
    )
}

export default Navbar