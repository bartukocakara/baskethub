import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { FaComments } from "@react-icons/all-files/fa/FaComments";
import { AiOutlineFileSearch } from "@react-icons/all-files/ai/AiOutlineFileSearch";

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
import "./_managersCard.scss";
import ManagerCommentsModal from '../../modals/comments/manager-comments/ManagerCommentsModal';
import Header from './partials/Header';

const ManagersCard = () => {
    
    const [showManagerCommentsModal, setManagerCommentsModalShow] = useState(false);

    const handleManagerCommentsModalClose = () => setManagerCommentsModalShow(false);
    const handleShowManagerCommentsModal = () => setManagerCommentsModalShow(true); 
    return (
        <>
        <ManagerCommentsModal handleManagerCommentsModalClose={handleManagerCommentsModalClose} show={showManagerCommentsModal}/>
        <div className="col-xl-9 col-md-9 m-auto col-sm-12 feed-card feed-my-fav-players-card">
            <div className="card shadow">
                <Header />
                <div className="d-flex card-custom">
                    <div className="row manager">
                        <div class="col-md-4 avatar avatar-xl me-3">
                            <img className="manager-img" src="assets/images/avatars/managers/manager2.png" alt="Card cap" />
                        </div>
                        <div class="col-md-4 text-center">
                            <AvatarGroup max={4} className="m-auto">
                                <Avatar alt="Remy Sharp" src="assets/images/avatars/players/player10.jpg" />
                                <Avatar alt="Travis Howard" src="assets/images/avatars/players/player1.jpg" />
                                <Avatar alt="Cindy Baker" src="assets/images/avatars/players/player4.jpg" />
                                <Avatar alt="Agnes Walker" src="assets/images/avatars/players/player3.jpg" />
                                <Avatar alt="Trevor Henderson" src="assets/images/avatars/players/player5.jpg" />
                            </AvatarGroup>
                            <span>people working-out with this trainer</span>
                        </div>
                        <div class="col-md-4 text-center row">
                            <div className="d-flex"><h6 className="m-1">W :</h6><span className="m-1">500$</span></div>
                            <div className="d-flex"><h6 className="m-1">M :</h6><span className="m-1">3000$</span></div>
                            <div className="d-flex"><h6 className="m-1">Y :</h6><span className="m-1">5500$</span></div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer p-1">
                    <Link  to="manager-detail">
                        <AiOutlineFileSearch size={30} className="my-3 mx-4"/>
                    </Link>
                    <div className="footer-right d-flex">
                        <Link class="btn btn-light m-2 p-2 text-primary">
                            <FaComments className="card-footer-icon" size={25} onClick={handleShowManagerCommentsModal} />
                        </Link>
                        <Link class="btn btn-light m-2 p-2 text-primary " to="manager-chat">
                            <AiOutlineMail className="card-footer-icon" />
                        </Link>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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
                </div>
            </div>
        </div>
        </>
    )
}

export default ManagersCard
