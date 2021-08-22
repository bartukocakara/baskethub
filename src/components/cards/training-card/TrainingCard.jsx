import React from 'react'
import "./_trainingCard.scss";
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
const TrainingCard = () => {
    return (
        <div className="tournament-card col-xl-9 col-md-9 col-sm-12 h-25 m-auto">
            <div className="d-flex m-2 p-2 row">
                <div className="col-md-3">
                <h6 className="m-1">Dribbling Training</h6>
                </div>
                <div className="col-md-6 d-flex">
                <AvatarGroup max={3} className="m-1" >
                    <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                    <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                </AvatarGroup>
                <span className="m-1">kişi katılıyor...</span>
                </div>
                <div className="col-md-3">
                    <span className="d-inline badge bg-success">Last 3 days</span>
                </div>
            </div>
            
            <div className="card shadow feed-training-card">
            <h4 className="card-title text-center text-light w-75 m-auto rounded">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div style={{ height: "60px" }} height="100"></div>
                <div className="card-footer bg-transparent d-flex p-2 justify-content-between">
                    <div className="footer-left">
                        <Link to="training-detail" className="btn btn-light">
                            Details
                        </Link>
                    </div>
                    
                    <div className="row w-75 footer-bg">
                        <div class="col-lg-4 footer-widget text-center text-light">
                            <BsClockFill size={20} />
                            <p>4 x 10</p>
                        </div>
                        <div class="col-lg-4 footer-widget text-center text-light">
                            <IoIosPeople size={25} />
                            <p>8</p>
                        </div>
                        <div class="col-lg-4 footer-widget text-center text-light">
                            <IoIosPeople size={25} />
                            <p>1-3</p>
                        </div>
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
    )
}

export default TrainingCard
