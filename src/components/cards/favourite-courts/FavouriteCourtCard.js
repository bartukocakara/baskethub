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

import {
    Link
  } from "react-router-dom";
import "./_favouriteCourt.scss";
import RequestCourtReservation from '../../modals/request-court-reservation/RequestCourtReservation';
     

const FavouriteCourtCard = () => {
    const [showRequestCourtReservationModal, setRequestCourtReservationModalShow] = useState(false);

    const handleRequestCourtReservationModalClose = () => setRequestCourtReservationModalShow(false);
    const handleShowRequestCourtReservationModal = () => setRequestCourtReservationModalShow(true); 
    return (
        <>
        <RequestCourtReservation handleRequestCourtReservationModalClose={handleRequestCourtReservationModalClose}
                                 show={showRequestCourtReservationModal}/>
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-courts-card">
            <div className="card shadow">
                <h4 className="card-title text-center">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="hall" srcset="" />
                    </div>
                    <div className="card-middle-text row">
                        <div class="col-lg-3 text-center">
                            <p className="prop-name w-100 p-2 badge bg-primary"><AiOutlineClear size={25}/></p>
                            <p>5/10</p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <p className="prop-name w-100 p-2 badge bg-primary"><HiOutlineEmojiHappy size={25}/></p>
                            <p>8/10</p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <p className="prop-name w-100 p-2 badge bg-primary"><AiOutlineFieldTime size={25}/></p>
                            <p>7/10</p>
                        </div>
                        <div class="col-lg-3 text-center">
                            <p className="prop-name w-100 p-2 badge bg-primary"><FaMoneyBill size={25}/></p>
                            <p>125₺</p>
                        </div>
                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg" alt="Card cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <Link to="court-detail" className="btn btn-light">
                            Court Details
                        </Link>
                    </div>
                    <div className="footer-right d-flex">
                        <Link class="btn btn-light m-2 p-2 text-primary border" to="message-detail">
                            <AiOutlineMail className="card-footer-icon" />
                        </Link>
                        
                        <Link class="btn btn-light m-2 p-2 text-primary border" onClick={handleShowRequestCourtReservationModal}>
                            <FaHandshake className="card-footer-icon" />
                        </Link>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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
