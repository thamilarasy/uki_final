import React, { Fragment, useState } from 'react'
import { Route, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import Search from './Search'

import '../../App.css'

// function navbar() {
//     const [click, setclick] = useState(false)
//     const handleClick =() => setclick(!click);
//     // const closeMobileMenu =() => setclick(false)





const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }
    

    

    return (
        <Fragment>
            <nav className="navbar">
                <div className='navbar-container'>
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/slogo.png" width='100' />
                        </Link>
                    </div>
                </div>
                </div>
                {/* home button */}
                <div className="col-1 col-md-1 mt-2 mt-md-0">
                    <div className="align-items-center">
                        <Link to="/"><i className='fa fa-home text-white fs30 mlm35'></i></Link>
                      
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="d-flex align-items-center">
                        {/* <Link to="/"><i className='fa fa-home text-white mx-2'></i></Link> */}
                        <div className="flex-grow-1">
                            <Route render={({ history }) => <Search history={history} />} />
                        </div>
                    </div>
                </div>
            
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        {/* <span id="cart" className="ml-3">Cart</span> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="white"
                            className="bi bi-minecart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                          </svg>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span>{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">LOGIN</Link>}


                </div>
            </nav>
        </Fragment>
    )
}
// }
export default Header
