import React, { useState } from 'react'

import { GiPalmTree } from "@react-icons/all-files/gi/GiPalmTree";
import { GiHealthNormal } from "@react-icons/all-files/gi/GiHealthNormal";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import {
    Link
  } from "react-router-dom";
  
  import RequestTeamJoin from '../../../modals/request-team-join/RequestTeamJoin';
  import RequestPlayerJoin from '../../../modals/request-player-join/RequestPlayerJoin';
const TeamDetailTable = () => {

    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);
    
    const [showRequestTeamJoin, setRequestTeamJoinShow] = useState(false);

    const handleRequestTeamJoinClose = () => setRequestTeamJoinShow(false);
    const handleRequestTeamJoinModal = () => setRequestTeamJoinShow(true);

    
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />
        <RequestTeamJoin handleRequestTeamJoinClose={handleRequestTeamJoinClose} show={showRequestTeamJoin}  />

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-lg">
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">City</th>
                            <th className="text-center">Position</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...Array(5)].map((i, teamDetail) => (
                                <tr key={i}>
                                    <td class="col-3">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-lg">
                                                <img src="assets/images/faces/5.jpg" alt="team-detail" />
                                            </div>
                                            <Link to="player-detail"><p class="font-bold ms-4 mb-0">Si Cantik</p></Link>
                                        </div>
                                    </td>
                                    <td class="col-auto">
                                        <p class="mb-0 text-center">İzmir, İstanbul, Ankara</p>
                                    </td>
                                    <td class="col-auto  text-center">
                                        <p class="mb-0 d-flex ">
                                            <span className="badge w-25 bg-success m-1">G</span>
                                            <span className="badge w-25 bg-success m-1">SG</span>
                                            <span className="badge w-25 bg-success m-1">SF</span>
                                        </p>
                                    </td>
                                    <td class="col-auto">
                                        <p class="mb-0 text-center"><GiPalmTree size={25} className="text-success m-1"/><GiHealthNormal size={25} className="text-danger m-1"/> <FaCalendarCheck size={25} className="text-primary m-1"/></p>
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                        <div class="dropdown">
                                            <Link class="btn btn-light m-2 p-2 text-primary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FaHandshake className="card-footer-icon"  />
                                            </Link>
                                            <ul class="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                                                <li><Link class="dropdown-item text-center" onClick={handleRequestPlayerJoinModal}>Request join match </Link></li>
                                                <li><Link class="dropdown-item text-center" onClick={handleRequestTeamJoinModal}>Request join team </Link></li>
                                            </ul>
                                        </div>
                                        <Link className="btn btn-light m-2 p-2 rounded text-primary" to="player-chat"><FiMail/></Link>

                                        <div class="dropdown">
                                            <Link class="btn btn-light m-2 p-2 text-primary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FiShare2 className="card-footer-icon"  />
                                            </Link>
                                            <ul class="dropdown-menu border" aria-labelledby="dropdownMenuLink">
                                                <li><Link class="dropdown-item text-center">With Player <GoPerson /></Link></li>
                                                <li><Link class="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                                                <li><Link class="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                                                <li><Link class="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                                                <li><Link class="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                                            </ul>
                                        </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default TeamDetailTable
