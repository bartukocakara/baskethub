import React from 'react'
import "./_myMatchesCard.scss";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { BsClockFill } from "@react-icons/all-files/bs/BsClockFill";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { FiUserPlus } from "@react-icons/all-files/fi/FiUserPlus";

import {
    Link
  } from "react-router-dom";
const MyMatchesCard = () => {
    return (
        <>
        <h6>HAZ 13, PAZAR</h6>
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-matches-card">
            <div className="card shadow">
                <h4 className="card-title text-center m-2">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    </div>
                    <div className="card-middle-text row">
                        <div class="col-lg-4 text-center">
                            <p className="prop-name badge bg-primary"><BsClockFill size={25}/></p>
                            <p>19:00 - 20:00</p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <p className="prop-name badge bg-primary"><IoIosPeople size={25}/></p>
                            <p>8</p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <p className="prop-name badge bg-primary"><FiUserPlus size={25}/></p>
                            <p>1-3</p>
                        </div>

                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg"
                        alt="Card cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <Link to="match-detail" className="btn btn-light">
                            Match Details
                        </Link>
                    </div>
                    <div className="footer-right d-flex">
                        <Link to="match-chat" className="btn btn-light text-primary">
                            <AiOutlineMail className="card-footer-icon"/>
                        </Link>
                        <div class="dropdown">
                            <button class="btn btn-light text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 className="card-footer-icon" />
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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

export default MyMatchesCard
