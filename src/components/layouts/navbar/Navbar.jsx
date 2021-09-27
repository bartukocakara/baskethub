import "./_navbar.scss";
import {
    Link
  } from "react-router-dom";
import Create from './partials/Create';
import Notifications from './partials/Notifications';
import Messages from './partials/Messages';
import ProfileOptions from "./partials/ProfileOptions";

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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                           <Create />
                           <Messages />
                           <Notifications />
                           <ProfileOptions />
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </header>
        <hr className="nav-shadow"/>
        </>
        
    )
}

export default Navbar