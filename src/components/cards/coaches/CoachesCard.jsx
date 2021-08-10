import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { FaComments } from "@react-icons/all-files/fa/FaComments";

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
import "./_coachesCard.scss";
import CourtCommentsModal from '../../modals/comments/court-comments/CourtCommentsModal';

const CoachesCard = () => {
    
    const [showCommentsModal, setCommentsModalShow] = useState(false);

    const handleCommentsModalClose = () => setCommentsModalShow(false);
    const handleShowCommentsModal = () => setCommentsModalShow(true); 
    return (
        <>
        <CourtCommentsModal handleCommentsModalClose={handleCommentsModalClose} show={showCommentsModal}/>
        <div className="col-xl-9 col-md-9 m-auto col-sm-12 feed-card feed-my-fav-players-card">
            <div className="card shadow">
                <div class="d-flex justify-content-between p-2">
                    <h4 className="card-title text-center">Bartu Kocakara</h4>
                    <p><GoLocation size={25} className="text-primary"/>İstanbul <span>/ TR</span></p>
                </div>
                <div className="d-flex card-custom">
                    <div className="row coach">
                        <div class="col-md-4 avatar avatar-xl">
                            <img className="coach-img" src="assets/images/samples/player.jpg"
                            alt="Card cap" />
                        </div>
                        <div class="col-md-4 text-center">
                            <AvatarGroup max={4} className="m-auto">
                                <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
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
                    <div className="footer-left">
                        <Link to="coach-detail" className="btn btn-light mt-2">
                            Details
                        </Link>
                    </div>
                    <div className="footer-right d-flex">
                        <Link class="btn btn-light m-2 p-2 text-primary">
                            <FaComments className="card-footer-icon" size={25} onClick={handleShowCommentsModal} />
                        </Link>
                        <Link class="btn btn-light m-2 p-2 text-primary " to="message-detail">
                            <AiOutlineMail className="card-footer-icon" />
                        </Link>
                        <Link class="btn btn-light m-2 p-2 text-primary " to="trainer-offer">
                            <FaHandshake className="card-footer-icon" />
                        </Link>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 className="card-footer-icon"  />
                            </Link>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
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

export default CoachesCard
