import {
    Link
  } from "react-router-dom";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

const Notifications = () => {
    return (
        <li className="nav-item dropdown me-1">
            <Link className="nav-link active avatar" href="#" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className='bi bi-bell bi-sub fs-4 text-gray-600'></i>
                <span className="avatar-status bg-success"></span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end notification-drop text-center" aria-labelledby="dropdownMenuButton">
                <h6>You have 3 Notifications</h6>
                <hr />
                <div className="list-height">
                    {
                        [...Array(7)].map(() => (
                            <li className="border-bottom"><Link class="dropdown-item text-center d-flex" to="notification-detail"><FaHandshake /><h6 className="notify-name">Deniz Polat</h6><p className="cut-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p><span class="badge bg-success">New</span></Link></li>

                        ))
                    }
                </div>
                <button className="btn btn-primary text-light m-2">Mark all as read</button><Link to="notifications" className="btn btn-primary see-all">See all</Link>
            </ul>
        </li>
    )
}

export default Notifications
