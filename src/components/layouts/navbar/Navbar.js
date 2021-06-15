import React from 'react'
import "./_navbar.scss";
import {
    NavLink,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <header className='mb-3'>
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <Link class="burger-btn d-block">
                        <i className="bi bi-justify fs-3"></i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown me-1">
                                <Link className="nav-link active dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className='bi bi-envelope bi-sub fs-4 text-gray-600'></i>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end mail-drop" aria-labelledby="dropdownMenuButton">
                                    <h6 class="dropdown-header">Messages</h6>
                                    {
                                        [...Array(5)].map(() => (
                                            <li><Link class="dropdown-item" to="message-detail">No new message</Link></li>

                                        ))
                                    }
                                </ul>
                            </li>
                            <li className="nav-item dropdown me-3">
                                <Link className="nav-link active dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class='bi bi-bell bi-sub fs-4 text-gray-600'></i>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end notification-drop" aria-labelledby="dropdownMenuButton">
                                        <h6 class="dropdown-header">Notifications</h6>
                                    {
                                        [...Array(5)].map(() => (
                                            <li><Link class="dropdown-item" to="notification-detail">No new mail</Link></li>

                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="user-menu d-flex">
                                    <div className="user-name text-end me-3">
                                        <h6 className="mb-0 text-gray-600">Bartu Kocakara</h6>
                                    </div>
                                    <div className="user-img d-flex align-items-center">
                                        <div className="avatar avatar-md">
                                            <img src="assets/images/faces/1.jpg" alt="profile" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <h5 className="dropdown-header">Hello, Bartu!</h5>
                                <li>
                                    <NavLink to="/my-profile" className="dropdown-item">
                                        <i class="icon-mid bi bi-person me-2"></i>
                                        My Profile
                                    </NavLink>
                                </li>
                                <li><Link className="dropdown-item" href="#"><i class="icon-mid bi bi-gear me-2"></i>
                                        Settings</Link></li>
                                <li><Link className="dropdown-item" href="#"><i class="icon-mid bi bi-wallet me-2"></i>
                                        Wallet</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <ExampleComponent />
                                </li>
                                <li><Link className="dropdown-item" href="#"><i
                                            cclassNameass="icon-mid bi bi-box-arrow-left me-2"></i> Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
        </>
        
    )
}

export default Navbar


function ExampleComponent() {
  const stopEvent = (event) => event.stopPropagation();

  return (
    // removed everything but anchor for brevity
    <a href="my-profile" id="wfu" onClick={stopEvent}> Write For Us? </a>
  )
}
