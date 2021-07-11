import React from 'react'
import "./_tournamentsCard.scss";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { BsClockFill } from "@react-icons/all-files/bs/BsClockFill";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
const TournamentsCard = () => {
    return (
        <>
        <div className="tournament-card col-xl-9 col-md-9 col-sm-10 h-25 m-auto">
            <div className="d-flex m-2 p-2">
                <h6 className="m-1">İzmir Turnuvası</h6>
                <AvatarGroup max={3} className="m-1" >
                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                </AvatarGroup>
                <span className="m-1">kişi katılıyor...</span>
            </div>
            <div className="card shadow feed-tournament-card">
                <h4 className="card-title text-center m-2 text-light">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div className="card-middle-text row">
                        <div class="col-lg-4 text-center">
                        <BsClockFill size={20} className="text-light"/>
                            <p className="prop-name badge "></p>
                            <p>4 x 10</p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <IoIosPeople size={25} className="text-light"/>
                            <p>8</p>
                        </div>
                        <div class="col-lg-4 text-center">
                            <IoIosPeople size={25} className="text-light"/>
                            <p>1-3</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex  p-2">
                    <div className="footer-left">
                        <Link to="tournament-detail" className="btn btn-light">
                            Details
                        </Link>
                    </div>
                    <div className="footer-right d-flex">
                        <div class="dropdown">
                        <button class="btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <FiShare2 className="card-footer-icon" />
                        </button>
                        <ul class="dropdown-menu tournament-dropdown" aria-labelledby="dropdownMenuButton1">
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

export default TournamentsCard
