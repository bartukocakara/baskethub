import {
    Link
  } from "react-router-dom";
  
const Messages = () => {
    return (
        <li className="nav-item dropdown me-1">
            <Link className="nav-link active  avatar" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i className='bi bi-envelope bi-sub fs-4 text-gray-600'></i>
                <span className="avatar-status bg-success"></span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end mail-drop text-center" aria-labelledby="dropdownMenuButton">
                <h6>You have 3 Messages</h6>
                <hr/>
                <div className="list-height">
                {
                    [...Array(7)].map(() => (
                        <li className="border-bottom"><Link class="dropdown-item text-center d-flex" to="player-chat"><h6>Ogün Aycan</h6><p className="cut-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p><span class="badge bg-success notify-name">New</span></Link></li>

                    ))
                }
                </div>
                <button className="btn btn-primary text-light m-2">Mark all as read</button>
            </ul>
        </li>
    )
}

export default Messages
