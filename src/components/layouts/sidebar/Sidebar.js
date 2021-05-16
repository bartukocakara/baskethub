import React from 'react'
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";


import "./_sidebar.scss";

const Sidebar = () => {
    return (
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active ps ps--active-y">
                    <div className="sidebar-menu">
                        <h1 class="sidebar-app-name">BasketHall</h1>
                        <ul className="menu">
                            <li className="sidebar-item active has-sub">
                                <a href="#" className="sidebar-link">
                                <i class="bi bi-search"></i>
                                <span>New Search</span>
                                </a>
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item">
                                        <GiBasketballBasket className="sidebar-icon" />
                                        <a href="component-alert.html">Court Search</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <RiTeamLine className="sidebar-icon"/>
                                        <a href="component-badge.html">Team Search</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <GoPerson className="sidebar-icon" />
                                        <a href="component-breadcrumb.html">Player Search</a>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="sidebar-item ">
                                <a href="index.html" className="sidebar-link">
                                    <i className="bi bi-grid-fill"></i>
                                    <span>My Matches</span>
                                </a>
                            </li>

                            <li className="sidebar-item  has-sub">
                                <a href="#" className="sidebar-link">
                                    <AiFillStar />
                                    <span >Favourite</span>
                                </a>
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item ">
                                        <a href="component-alert.html">Favorite Players</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="component-badge.html">Favourite Courts</a>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">
                                <AiOutlineFileSearch />
                                <span>Last Search</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="sidebar-badges">
                        <div class="card-body">
                            <div class="badges">
                                <span class="badge sidebar-badge">Hizmet Şartları</span>
                                <span class="badge sidebar-badge">Gizlilik politikası</span>
                                <span class="badge sidebar-badge">Çerez Politikası</span>
                                <span class="badge sidebar-badge">Hakkımızda</span>
                                <span class="badge sidebar-badge">İletişim</span>
                                <span class="badge sidebar-badge">S.S.S</span>
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
