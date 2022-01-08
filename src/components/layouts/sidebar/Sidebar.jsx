import React from 'react'
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import {FaBasketballBall} from "@react-icons/all-files/fa/FaBasketballBall";
import {BsPeopleFill} from "@react-icons/all-files/bs/BsPeopleFill";
// import {ImTree} from "@react-icons/all-files/im/ImTree";
// import {GiStrong} from "@react-icons/all-files/gi/GiStrong";
// import {BsFillCameraVideoFill} from "@react-icons/all-files/bs/BsFillCameraVideoFill";
// import {GiRainbowStar} from "@react-icons/all-files/gi/GiRainbowStar";
// import {FaRunning} from "@react-icons/all-files/fa/FaRunning";
// import {FaUserTie} from "@react-icons/all-files/fa/FaUserTie";
// import {BsFillBriefcaseFill} from "@react-icons/all-files/bs/BsFillBriefcaseFill";

import {
    NavLink,
    Link,
  } from "react-router-dom";
import "./_sidebar.scss";
import LanguageOptions from './partials/LanguageOptions';
import NewSearch from './partials/NewSearch';
import InfoButtons from './partials/InfoButtons';


const Sidebar = () => {

    
    return (
        <>

            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active ps ps--active-y">
                    <div class="sidebar-header">
                        <div class="d-flex justify-content-between">
                            <div class="logo">
                                <Link to="/">
                                    <h5 class="sidebar-app-name app-name">Baskethub</h5>
                                </Link>

                            </div>
                            <LanguageOptions />
                            <div class="toggler">
                                <Link class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">

                            <NewSearch />

                            <li className="sidebar-item">
                                <NavLink  to="/my-matches" className="sidebar-link">
                                    <FaBasketballBall />
                                    <span>My Matches </span>
                                    <span className="badge bg-warning side-shadow">4</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/my-teams" className="sidebar-link">
                                    <BsPeopleFill />
                                    <span>My Teams </span>
                                    <span className="badge bg-warning side-shadow">4</span>
                                </NavLink >
                            </li>
                            {/* <li className="sidebar-item">
                                <NavLink  to="/my-trainers" className="sidebar-link">
                                <GiStrong />
                                    <span>My Trainers </span>
                                    <span className="badge bg-warning side-shadow">4</span>
                                </NavLink >
                            </li> */}
                            {/* <li className="sidebar-item">
                                <NavLink  to="/coaches" className="sidebar-link">
                                    <FaUserTie />
                                    <FaBasketballBall  size={13} className="mt-2"/>
                                    <span>Coaches</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/managers" className="sidebar-link">
                                    <FaUserTie />
                                    <BsFillBriefcaseFill size={13} className="mt-2"/>
                                    <span>Managers</span>
                                </NavLink >
                            </li> */}
                            <li className="sidebar-item has-sub">
                                <Link  to="/my-matches" className="sidebar-link">
                                    <AiFillStar />
                                    <span >Favourite</span>
                                </Link >
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item ">
                                        <NavLink  to="/favourite-players" className="sidebar-link fav-sidebar">
                                            Favorite Players
                                        </NavLink>
                                    </li>
                                    <li className="submenu-item">
                                        <NavLink  to="/favourite-courts" className="sidebar-link">
                                        Favourite Courts
                                        </NavLink >
                                    </li>
                                    {/* <li className="submenu-item">
                                        <NavLink  to="/favourite-trainers" className="sidebar-link">
                                        Favourite Trainers
                                        </NavLink >
                                    </li> */}
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/last-search" className="sidebar-link">
                                    <AiOutlineFileSearch />
                                    <span>Last Search</span>
                                </NavLink >
                            </li>
                            {/* <li className="sidebar-item">
                                <NavLink  to="/trainings" className="sidebar-link">
                                    <FaRunning />
                                    <span>Trainings</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/tournaments" className="sidebar-link">
                                    <ImTree />
                                    <span>Tournaments</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/all-star" className="sidebar-link">
                                    <GiRainbowStar />
                                    <span>All Star</span>
                                </NavLink >
                            </li>
                            <hr />
                            <li className="sidebar-item">
                                <NavLink  to="/watch" target="_blank" className="sidebar-link">
                                    <BsFillCameraVideoFill />
                                    <span>Watch</span>
                                </NavLink >
                            </li> */}
                        </ul>
                    </div>
                    <hr />
                    <InfoButtons />
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                        <div className="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                <div className="ps__rail-y" style={{top: "0px", height: "723px", right: "0px"}}>
                    <div className="ps__thumb-y" tabindex="0" style={{top: "0px", height: "316px"}}></div>
                </div>
            </div>
            
        </>
    )
}
export default Sidebar
