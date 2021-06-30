import React, { useState } from 'react'
import { GiBasketballBasket } from "@react-icons/all-files/gi/GiBasketballBasket";
import { RiTeamLine } from "@react-icons/all-files/ri/RiTeamLine";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";
import {FaBasketballBall} from "@react-icons/all-files/fa/FaBasketballBall";
import {BsPeopleFill} from "@react-icons/all-files/bs/BsPeopleFill";
import {ImTree} from "@react-icons/all-files/im/ImTree";
import CourtSearch from '../../modals/court-search/CourtSearch';
import PlayerSearch from '../../modals/player-search/PlayerSearch';
import TeamSearch from '../../modals/team-search/TeamSearch';
import TrainerSearch from '../../modals/trainer-search/TrainerSearch';


import {
    NavLink,
    Link,
  } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = () => {

    const [showTeamSearch, setTeamShow] = useState(false);
  
    const handleTeamClose = () => setTeamShow(false);
    const handleTeamShow = () => setTeamShow(true);

    const [showPlayerSearch, setPlayerShow] = useState(false);
  
    const handlePlayerClose = () => setPlayerShow(false);
    const handlePlayerShow = () => setPlayerShow(true);

    const [showCourtSearch, setCourtShow] = useState(false);
  
    const handleCourtClose = () => setCourtShow(false);
    const handleCourtShow = () => setCourtShow(true);

    const [showTrainerSearch, setTrainerShow] = useState(false);
  
    const handleTrainerClose = () => setTrainerShow(false);
    const handleTrainerShow = () => setTrainerShow(true);

    return (
        <>
        <CourtSearch handleCourtClose={handleCourtClose} show={showCourtSearch} />
        <PlayerSearch handlePlayerClose={handlePlayerClose} show={showPlayerSearch} />
        <TeamSearch handleTeamClose={handleTeamClose} show={showTeamSearch} />
        <TrainerSearch handleTrainerClose={handleTrainerClose} show={showTrainerSearch}/>
            <div id="sidebar" className="active">
                <div className="sidebar-wrapper active ps ps--active-y">
                    <div class="sidebar-header">
                        <div class="d-flex justify-content-between">
                            <div class="logo">
                                <Link to="/">
                                    <h4 class="sidebar-app-name">BasketHall</h4>
                                </Link>
                            </div>
                            <div class="lang-menu">
                                <div class="selected-lang">
                                    EN
                                </div>
                                <ul>
                                    <li>
                                        <Link class="de">TR</Link>
                                    </li>
                                    <li>
                                        <Link class="en">ES</Link>
                                    </li>
                                    <li>
                                        <Link class="fr">FR</Link>
                                    </li>
                                    <li>
                                        <Link class="ar">AR</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="toggler">
                                <Link class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul className="menu">
                            <li exact className="sidebar-item has-sub">
                                <Link className="sidebar-link">
                                <i class="bi bi-search"></i>
                                <span>New Search</span>
                                </Link>
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item">
                                        <Link variant="primary" onClick={handleCourtShow}>
                                            <GiBasketballBasket className="sidebar-icon" />
                                            Court Search
                                        </Link>
                                    </li>
                                    <li className="submenu-item">
                                        <Link variant="primary" onClick={handleTeamShow}>
                                            <RiTeamLine className="sidebar-icon"/>
                                            Team Search
                                        </Link>
                                    </li>
                                    <li className="submenu-item">
                                        <Link variant="primary" onClick={handlePlayerShow}>
                                            <GoPerson className="sidebar-icon" />
                                            Player Search
                                        </Link>
                                    </li>
                                    <li className="submenu-item">
                                        <Link variant="primary" onClick={handleTrainerShow}>
                                            <GoPerson className="sidebar-icon" />
                                            Trainer Search
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/my-matches" className="sidebar-link">
                                    <FaBasketballBall />
                                    <span>My Matches</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/my-teams" className="sidebar-link">
                                    <BsPeopleFill />
                                    <span>My Teams</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item has-sub">
                                <Link  to="/my-matches" className="sidebar-link">
                                    <AiFillStar />
                                    <span >Favourite</span>
                                </Link >
                                <ul className="submenu" style={{display: "none"}}>
                                    <li className="submenu-item">
                                        <NavLink  to="/favourite-players" className="sidebar-link">
                                            Favorite Players
                                        </NavLink>
                                    </li>
                                    <li className="submenu-item">
                                        <NavLink  to="/favourite-courts" className="sidebar-link">
                                        Favourite Courts
                                        </NavLink >
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/last-search" className="sidebar-link">
                                    <AiOutlineFileSearch />
                                    <span>Last Search</span>
                                </NavLink >
                            </li>
                            <li className="sidebar-item">
                                <NavLink  to="/tournaments" className="sidebar-link">
                                    <ImTree />
                                    <span>Tournaments</span>
                                </NavLink >
                            </li>
                        </ul>
                    </div>

                    <div class="sidebar-badges">
                        <div class="card-body">
                            <div class="badges">
                                <NavLink to="/service-policies" target="_blank" className="sidebar-link info">
                                    <span class="badge sidebar-badge">Hizmet Şartları</span>
                                </NavLink>
                                <NavLink to="/secure" target="_blank" className="sidebar-link info">
                                    <span class="badge sidebar-badge">Gizlilik politikası</span>
                                </NavLink>
                                <NavLink to="/cookies" target="_blank" className="sidebar-link info">
                                    <span class="badge sidebar-badge">Çerez Politikası</span>
                                </NavLink>                                
                                <NavLink to="/about-us" target="_blank" className="sidebar-link info">
                                    <span class="badge sidebar-badge">Hakkımızda</span>
                                </NavLink>
                                <NavLink to="/contact" target="_blank" className="sidebar-link info">
                                    <span class="badge sidebar-badge">İletişim</span>
                                </NavLink>
                                <NavLink to="/faq" className="sidebar-link info">
                                    <span class="badge sidebar-badge">S.S.S</span>
                                </NavLink>
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
            
        </>
    )
}
export default Sidebar
