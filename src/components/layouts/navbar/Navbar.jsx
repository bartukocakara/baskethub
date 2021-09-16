import React, {useState} from 'react'
import "./_navbar.scss";
import {
    NavLink,
    Link
  } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import Create from './partials/Create';
import Notifications from './partials/Notifications';
import Messages from './partials/Messages';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);

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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                           <Create />
                           <Messages />
                           <Notifications />
                        </ul>
                        <div className="dropdown">
                            <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="user-menu d-flex">
                                    <div className="user-name text-end me-3">
                                        <h6 className="mb-0 text-gray-600">Bartu Kocakara</h6>
                                    </div>
                                    <div className="user-img d-flex align-items-center">
                                        <div className="avatar avatar-md">
                                            <img src="assets/images/avatars/players/player2.jpg" alt="profile" />
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
                                <li><NavLink to="profile-settings" className="dropdown-item" href="#">
                                    <i class="icon-mid bi bi-gear me-2"></i>
                                        Settings
                                    </NavLink>
                                </li>
                                <hr />
                                <li className="m-2 d-flex justify-content-evenly">
                                    <p>Theme</p>
                                    <DarkModeToggle
                                        onChange={setIsDarkMode}
                                        checked={isDarkMode}
                                        size={50}
                                        className="ml-2"
                                    />
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <ExampleComponent />
                                </li>
                                <li><a className="dropdown-item" href="login.html">
                                    <i className="icon-mid bi bi-box-arrow-left me-2"></i> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <hr className="nav-shadow"/>
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
