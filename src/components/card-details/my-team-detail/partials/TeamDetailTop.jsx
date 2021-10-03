import React, { useState } from 'react'

import { FiSettings } from "@react-icons/all-files/fi/FiSettings"
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { AiOutlineUsergroupDelete } from "@react-icons/all-files/ai/AiOutlineUsergroupDelete";
import { RiErrorWarningFill } from "@react-icons/all-files/ri/RiErrorWarningFill";
import { BsFillLockFill } from "@react-icons/all-files/bs/BsFillLockFill";
import { BsFillAwardFill } from "@react-icons/all-files/bs/BsFillAwardFill";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

import {
    Link
  } from "react-router-dom";

import "./../_myTeamDetail.scss";

import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { IoMdNotificationsOutline } from "@react-icons/all-files/io/IoMdNotificationsOutline";

import ExitPlayerModal from '../../../modals/exit-player/ExitPlayerModal';
import QuitTeamModal from '../../../modals/quit-team/QuitTeam';
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake';

const TeamDetailTop = () => {

    const [showExitPlayerModal, setExitPlayerModal] = useState(false);

    const handleExitPlayerModalClose = () => setExitPlayerModal(false);
    const handlesetExitPlayerModal = () => setExitPlayerModal(true);

    const [showQuitTeamModal, setQuitTeamModal] = useState(false);

    const handleQuitTeamModalClose = () => setQuitTeamModal(false);
    const handleQuitTeamModal = () => setQuitTeamModal(true);
    return (
        <>
            <ExitPlayerModal handleExitPlayerModalClose={handleExitPlayerModalClose} show={showExitPlayerModal}  />
            <QuitTeamModal handleQuitTeamModalClose={handleQuitTeamModalClose} show={showQuitTeamModal}  />

            <div className="card-header d-flex justify-content-center align-items-center">
                <div className="w-25 rounded mx-5 text-center">
                    <img src="assets/images/avatars/teams/team1.jpg" alt="team-detail" className="w-50 d-block m-auto my-2" />
                    <div className="">
                        <BsFillAwardFill  size={30} className="text-success"/>
                        <BsFillAwardFill  size={30} className="text-success"/>
                        <BsFillAwardFill  size={30} className="text-success"/>
                    </div>
                </div>
                <span className="badge bg-primary mb-1 mr-2">12</span><h4 className="text-center">Bornova Team</h4>
                <div className="d-flex">
                    <div className="dropdown">
                        <Link className="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiSettings/>                            
                        </Link>
                        <ul className="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item text-center" to="edit-team"><GoPerson /> Edit Team </Link></li>
                            <li><Link className="dropdown-item text-center" onClick={handlesetExitPlayerModal}><AiOutlineUsergroupDelete/> Exit Player </Link></li>
                            <li><Link className="dropdown-item text-center"><RiErrorWarningFill /> Warn Player !</Link></li>
                            <li><Link to="team-settings" className="dropdown-item text-center"><BsFillLockFill/>Privacy</Link></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <Link className="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiShare2 />
                        </Link>
                        <ul className="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item text-center">With Player <GoPerson /></Link></li>
                            <li><Link className="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                            <li><Link className="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                            <li><Link className="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                            <li><Link className="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-light m-2 p-2 rounded text-primary border message" to="team-chat">
                        <FiMail/>
                        <span className="fixed-actions bg-primary text-light border">2</span>
                    </Link>

                    <div className="nav-item dropdown">
                        <Link className="btn btn-light m-2 p-2 text-primary border notification" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <IoMdNotificationsOutline size={35}/>
                            <span className="fixed-actions bg-primary text-light border">2</span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end notification-drop text-center" aria-labelledby="dropdownMenuButton">
                            <h6>You have 3 Notifications</h6>
                            <hr />
                            <div className="list-height">
                                {
                                    [...Array(7)].map(() => (
                                        <li className="border-bottom m-2 p-1">
                                            <Link class="dropdown-item text-center d-flex" to="notification-detail">
                                                <FaHandshake />
                                                <h6 className="notify-name">Deniz Polat</h6>
                                                <p className="cut-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                                                <span class="badge bg-success">New</span>
                                            </Link>
                                        </li>

                                    ))
                                }
                            </div>
                            <button className="btn btn-primary text-light m-2">Mark all as read</button><Link to="notifications" className="btn btn-primary see-all">See all</Link>
                        </ul>
                    </div>
                    
                    <input type="text" class="form-control w-50 mx-4 m-auto text-center" placeholder="Quick search"/>
                    <div className="m-auto">
                        <Link onClick={handleQuitTeamModal}>
                            <FiLogOut className="bg-danger text-light p-1 rounded" size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamDetailTop
