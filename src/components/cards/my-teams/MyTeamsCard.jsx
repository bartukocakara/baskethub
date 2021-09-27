import React, { useState } from 'react'
import "./_myTeamsCard.scss";
import {
    Link
  } from "react-router-dom";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { BsFillLockFill } from "@react-icons/all-files/bs/BsFillLockFill";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { FiShare2 } from '@react-icons/all-files/fi/FiShare2';
import { GoPerson } from '@react-icons/all-files/go/GoPerson';
import { AiOutlineWhatsApp } from '@react-icons/all-files/ai/AiOutlineWhatsApp';
import { TiSocialFacebook } from '@react-icons/all-files/ti/TiSocialFacebook';
import { TiSocialTwitter } from '@react-icons/all-files/ti/TiSocialTwitter';
import { TiSocialInstagram } from '@react-icons/all-files/ti/TiSocialInstagram';
// import { FaRunning } from '@react-icons/all-files/fa/FaRunning';
import { FaBasketballBall } from '@react-icons/all-files/fa/FaBasketballBall';

import RequestAllStarJoinModal from './modals/RequestAllStarJoinModal';
import RequestMatchJoinModal from './modals/RequestMatchJoinModal';
import RequestTrainingJoinModal from './modals/RequestTrainingJoinModal';
import RequestTournamentJoinModal from './modals/RequestTournamentJoinModal';
const MyTeamsCard = () => {

    const [showRequestMatchJoin, setRequestMatchJoinShow] = useState(false);

    const handleRequestMatchJoinModalClose = () => setRequestMatchJoinShow(false);
    const handleRequestMatchJoinModal = () => setRequestMatchJoinShow(true);

    const [showRequestTrainingJoinModal, setRequestTrainingJoinModalShow] = useState(false);

    const handleRequestTrainingJoinModalClose = () => setRequestTrainingJoinModalShow(false);
    const handleRequestTrainingJoinModal = () => setRequestTrainingJoinModalShow(true);

    const [showRequestTournamentJoinModal, setRequestTournamentJoinModalShow] = useState(false);

    const handleRequestTournamentJoinModalClose = () => setRequestTournamentJoinModalShow(false);
    const handleRequestTournamentJoinModal = () => setRequestTournamentJoinModalShow(true);

    const [showRequestAllStarJoinModal, setRequestAllStarJoinModalShow] = useState(false);

    const handleRequestAllStarJoinModalClose = () => setRequestAllStarJoinModalShow(false);
    const handleRequestAllStarJoinModal = () => setRequestAllStarJoinModalShow(true);


    // Decide if team is match team or training team with Farunnig & FaBasketballBall
    return (
        <>
        <RequestMatchJoinModal handleRequestMatchJoinModalClose={handleRequestMatchJoinModalClose} show={showRequestMatchJoin}  />
        <RequestTrainingJoinModal handleRequestTrainingJoinModalClose={handleRequestTrainingJoinModalClose} show={showRequestTrainingJoinModal}  />
        <RequestTournamentJoinModal handleRequestTournamentJoinModalClose={handleRequestTournamentJoinModalClose} show={showRequestTournamentJoinModal}  />
        <RequestAllStarJoinModal handleRequestAllStarJoinModalClose={handleRequestAllStarJoinModalClose} show={showRequestAllStarJoinModal}  />        
            <div className="col-md-6 feed-card">
                <div className="card shadow">
                    <div className="d-flex justify-content-between mt-2">
                        <FaBasketballBall className="text-success mx-3" size={25}/>
                        <div className="d-flex">
                            <h4 className="card-title text-center">Bornova Team</h4>
                            <BsFillLockFill className="m-1"/>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-light text-primary border mx-3 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 className="card-footer-icon" />
                            </button>
                            <ul class="dropdown-menu border" aria-labelledby="dropdownMenuButton1">
                                <li><Link class="dropdown-item text-center">With Player <GoPerson /></Link></li>
                                <li><Link class="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                                <li><Link class="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                                <li><Link class="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                                <li><Link class="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-content card-body text-center">
                        <AvatarGroup max={4} className="m-auto w-25 ">
                            <Avatar alt="Remy Sharp" src="assets/images/avatars/players/player1.jpg" />
                            <Avatar alt="Travis Howard" src="assets/images/avatars/players/player2.jpg" />
                            <Avatar alt="Cindy Baker" src="assets/images/avatars/players/player9.jpg" />
                            <Avatar alt="Agnes Walker" src="assets/images/avatars/players/player4.jpg" />
                            <Avatar alt="Trevor Henderson" src="assets/images/avatars/players/player5.jpg" />
                        </AvatarGroup>
                        <span>person in this team</span>
                    </div>
                    <div className="d-flex mt-4">
                        <Link to="my-team-detail" className="btn btn-light m-auto border">
                            Details
                        </Link>
                        <div class="dropdown m-2">
                            <button class="btn btn-warning mx-3 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Request
                            </button>
                            <ul class="dropdown-menu border" aria-labelledby="dropdownMenuButton1">
                                <li><Link class="dropdown-item text-center" onClick={handleRequestMatchJoinModal}>Request join match </Link></li>
                                <li><Link class="dropdown-item text-center" onClick={handleRequestTournamentJoinModal}>Request join tournament </Link></li>
                                <li><Link class="dropdown-item text-center" onClick={handleRequestTrainingJoinModal}>Request join training </Link></li>
                                <li><Link class="dropdown-item text-center" onClick={handleRequestAllStarJoinModal}>Request join allstar </Link></li>
                            </ul>
                        </div>
                        <Link to="team-chat" className="btn btn-light border m-auto">
                            <AiOutlineMail width="100px" className="m-auto" />
                        </Link>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default MyTeamsCard
