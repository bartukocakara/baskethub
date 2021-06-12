import React from 'react'
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import {
    Link,
  } from "react-router-dom";

import "./_sidebar.scss";

const Sidebar = () => {
    return (
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active ps ps--active-y">
                    <div class="sidebar-header">
                        <div class="d-flex justify-content-between">
                            <div class="logo">
                                <h1 class="sidebar-app-name">BasketHall</h1>
                            </div>
                            <div class="toggler">
                                <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li className="sidebar-item active has-sub">
                                <a href="#" className="sidebar-link">
                                <i class="bi bi-search"></i>
                                <span>New Search</span>
                                </a>
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item">
                                        <Link to="/my-games">
                                            <GiBasketballBasket className="sidebar-icon" />
                                            Court Search
                                        </Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/my-games">
                                        <RiTeamLine className="sidebar-icon"/>
                                        Team Search
                                        </Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/my-games">
                                        <GoPerson className="sidebar-icon" />
                                        Player Search
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="sidebar-item ">
                                <Link to="/my-games" className="sidebar-link">

                                    <i className="bi bi-grid-fill"></i>
                                    <span>My Matches</span>
                                </Link>
                            </li>

                            <li className="sidebar-item  has-sub">
                                    <Link to="/my-games" className="sidebar-link">
                                    <AiFillStar />
                                    <span >Favourite</span>
                                </Link>
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item ">
                                        <Link to="/favourite-players" className="sidebar-link">
                                            Favorite Players
                                        </Link>
                                    </li>
                                    <li className="submenu-item ">
                                        <Link to="/favourite-courts" className="sidebar-link">
                                        Favourite courts
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <Link to="/last-search" className="sidebar-link">
                                    <AiOutlineFileSearch />
                                    <span>Last Search</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="sidebar-badges">
                        <div class="card-body">
                            <div class="badges">
                                <Link to="/service-policies" className="sidebar-link">
                                    <span class="badge sidebar-badge">Hizmet Şartları</span>
                                </Link>
                                <Link to="/secure" className="sidebar-link">
                                    <span class="badge sidebar-badge">Gizlilik politikası</span>
                                </Link>
                                <Link to="/cookies" className="sidebar-link">
                                    <span class="badge sidebar-badge">Çerez Politikası</span>
                                </Link>                                
                                <Link to="/about-us" className="sidebar-link">
                                    <span class="badge sidebar-badge">Hakkımızda</span>
                                </Link>
                                <Link to="/contact" className="sidebar-link">
                                    <span class="badge sidebar-badge">İletişim</span>
                                </Link>
                                <Link to="/faq" className="sidebar-link">
                                    <span class="badge sidebar-badge">S.S.S</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
                <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                        <div className="ps__thumb-x" tabindex="0" style={{left: "0px", width: "0px"}}></div>
                </div>
                <div className="ps__rail-y" style={{top: "0px", height: "723px", right: "0px"}}>
                    <div className="ps__thumb-y" tabindex="0" style={{top: "0px", height: "316px"}}></div>
                </div>
            </div>
            
        // </div>
    )
}

export default Sidebar
