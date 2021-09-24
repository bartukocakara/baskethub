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
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import ExitPlayerModal from '../../../modals/exit-player/ExitPlayerModal';
import QuitTeamModal from '../../../modals/quit-team/QuitTeam';

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
                            <Link className="btn btn-light m-2 p-2 rounded text-primary border" to="team-chat"><FiMail/></Link>
                        </div>
                        <input type="text" class="form-control w-50 m-auto text-center" placeholder="Quick search"/>
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
