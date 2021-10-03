import React, {useState} from 'react'

import {
    NavLink,
    Link
  } from "react-router-dom";

import DarkModeToggle from "react-dark-mode-toggle";

const ProfileOptions = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
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
                <li>
                    <NavLink to="/my-wallet" className="dropdown-item">
                    <i class="icon-mid bi bi-wallet me-2"></i>
                        My Wallet
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
                <li><a className="dropdown-item" href="login.html">
                    <i className="icon-mid bi bi-box-arrow-left me-2"></i> Logout</a></li>
            </ul>
        </div>
    )
}

export default ProfileOptions
