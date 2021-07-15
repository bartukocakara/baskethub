import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { AiOutlineClear } from "@react-icons/all-files/ai/AiOutlineClear";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { HiOutlineEmojiHappy } from "@react-icons/all-files/hi/HiOutlineEmojiHappy";
import { AiOutlineFieldTime } from "@react-icons/all-files/ai/AiOutlineFieldTime";
import { FaMoneyBill } from "@react-icons/all-files/fa/FaMoneyBill";
import { FaComments } from "@react-icons/all-files/fa/FaComments";
import { GiPathDistance } from "@react-icons/all-files/gi/GiPathDistance";

import {
    Link
  } from "react-router-dom";
import "./_favouriteCourt.scss";
import RequestCourtReservation from '../../modals/request-court-reservation/RequestCourtReservation';
import CourtCommentsModal from '../../modals/court-comments/CourtCommentsModal';
     

const FavouriteCourtCard = () => {
    const [showRequestCourtReservationModal, setRequestCourtReservationModalShow] = useState(false);

    const handleRequestCourtReservationModalClose = () => setRequestCourtReservationModalShow(false);
    const handleShowRequestCourtReservationModal = () => setRequestCourtReservationModalShow(true);

    const [showCommentsModal, setCommentsModalShow] = useState(false);

    const handleCommentsModalClose = () => setCommentsModalShow(false);
    const handleShowCommentsModal = () => setCommentsModalShow(true); 
    return (
        <>
        <RequestCourtReservation handleRequestCourtReservationModalClose={handleRequestCourtReservationModalClose}
                                 show={showRequestCourtReservationModal}/>
        <CourtCommentsModal handleCommentsModalClose={handleCommentsModalClose}
                                 show={showCommentsModal}/>
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-courts-card">
            <div className="card shadow">
                <div className="row m-2">
                    <h4 className="col-md-9 card-title text-center">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                    <span className="d-inline m-1 badge bg-success float-right col-md-2">Ücretsiz iptal</span>
                </div>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="hall" srcset="" />
                    </div>
                    <div className="card-middle-text row">
                        <div class="col-lg-2 text-center">
                        <AiOutlineClear size={25} className="text-primary"/>
                            <p>5/10</p>
                        </div>
                        <div class="col-lg-2 text-center">
                            <HiOutlineEmojiHappy size={25}  className="text-primary"/>
                            <p>8/10</p>
                        </div>
                        <div class="col-lg-2 text-center">
                            <AiOutlineFieldTime size={25}  className="text-primary"/>
                            <p>7/10</p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <FaMoneyBill size={25}  className="text-primary"/>
                            <div className="court-prices w-100">
                                <label className="court-price-li d-flex"><span>1 saat </span> <p>: 125₺</p></label>
                                <label className="court-price-li d-flex"><span>1.30 saat </span> <p>: 150₺</p></label>
                            </div>
                        </div>
                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg" alt="Card cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left mt-2">
                        <Link className="btn btn-light" to="court-detail">
                            Court Details
                        </Link>
                    </div>
                    <div className="m-auto fw-bold d-flex">
                        <GiPathDistance size={30} className="m-1"/>
                        <label className="m-1">15km uzaklıkta</label>
                    </div>
                    <div className="footer-right d-flex">
                        <Link class="btn btn-light m-2 p-2 text-primary">
                            <FaComments className="card-footer-icon" size={25} onClick={handleShowCommentsModal} />
                        </Link>
                        <Link class="btn btn-light m-2 p-2 text-primary" to="message-detail">
                            <AiOutlineMail className="card-footer-icon" size={25} />
                        </Link>
                        
                        <Link class="btn btn-light m-2 p-2 text-primary" onClick={handleShowRequestCourtReservationModal}>
                            <FaHandshake className="card-footer-icon" />
                        </Link>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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

export default FavouriteCourtCard
