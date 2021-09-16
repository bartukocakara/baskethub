import React, { useState } from 'react'
import { GiPalmTree } from "@react-icons/all-files/gi/GiPalmTree";
import { GiHealthNormal } from "@react-icons/all-files/gi/GiHealthNormal";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import {
    Link
  } from "react-router-dom";
import RequestPlayerJoin from '../../../../components/modals/request-player-join/RequestPlayerJoin';
import RequestTeamJoin from '../../../../components/modals/request-team-join/RequestTeamJoin';
import RequestTrainingJoin from '../../../../components/modals/request-training-join/RequestTrainingJoin';
const Players = () => {

    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);
    
    const [showRequestTeamJoin, setRequestTeamJoinShow] = useState(false);

    const handleRequestTeamJoinClose = () => setRequestTeamJoinShow(false);
    const handleRequestTeamJoinModal = () => setRequestTeamJoinShow(true);

    const [showRequestTrainingJoin, setRequestTrainingJoinShow] = useState(false);

    const handleRequestTrainingJoinClose = () => setRequestTrainingJoinShow(false);
    const handleRequestTrainingJoinModal = () => setRequestTrainingJoinShow(true);
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />
        <RequestTeamJoin handleRequestTeamJoinClose={handleRequestTeamJoinClose} show={showRequestTeamJoin}  />
        <RequestTrainingJoin handleRequestTrainingJoinClose={handleRequestTrainingJoinClose} show={showRequestTrainingJoin}  />

            <div class="col-10 m-auto">
                <div class="card">
                    <div class="card-header d-flex">
                        <h4 className="w-75">Player List</h4>
                        <input type="search" className="form-control w-25 text-center" placeholder="Quick search"/>
                    </div>
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
                                        [...Array(5)].map((teamDetail) => (
                                            <tr>
                                            <td class="col-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-lg">
                                                        <img src="assets/images/avatars/players/player1.jpg" alt="team-detail" />
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
                                                    <div class="dropdown btn btn-success">
                                                        <Link class="text-light w-100" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <FaHandshake className="card-footer-icon w-100"  />
                                                        </Link>
                                                        <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
                                                            <li><Link class="dropdown-item text-center" onClick={handleRequestPlayerJoinModal}>Request join match </Link></li>
                                                            <li><Link class="dropdown-item text-center" onClick={handleRequestTeamJoinModal}>Request join team </Link></li>
                                                            <li><Link class="dropdown-item text-center" onClick={handleRequestTrainingJoinModal}>Request join trainig </Link></li>
                                                        </ul>
                                                    </div>
                                                    <Link to="player-chat" className="btn btn-warning"><FiMail/></Link>
                                                    <div class="dropdown btn btn-primary p-1">
                                                        <Link className="text-light" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <FiShare2 className="m-2" size={27}/>
                                                        </Link>
                                                        <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuLink">
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
                </div>
            </div>
        </>
    )
}

export default Players
