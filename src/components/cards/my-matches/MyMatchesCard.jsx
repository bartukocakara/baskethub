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
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {
    Link
  } from "react-router-dom";
const MyMatchesCard = () => {
    return (
        <>
        <div className="col-lg-10 col-sm-12 m-auto">
            <div className="col-md-12 d-flex p-1 match-card-up">
                <h6 className="m-2 match-card-date">HAZ 13, PAZAR</h6>
                <AvatarGroup max={4} className="m-auto w-25 ">
                    <Avatar alt="Remy Sharp" src="assets/images/avatars/players/player1.jpg" />
                    <Avatar alt="Travis Howard" src="assets/images/avatars/players/player2.jpg" />
                    <Avatar alt="Cindy Baker" src="assets/images/avatars/players/player3.jpg" />
                    <Avatar alt="Agnes Walker" src="assets/images/avatars/players/player4.jpg" />
                    <Avatar alt="Trevor Henderson" src="assets/images/avatars/players/player5.jpg" />
                </AvatarGroup>
                <span className="m-2">kişi katılıyor...</span>
            </div>
            <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-matches-card">
                <div className="card shadow">
                    <div className="m-2 p-2 d-flex">
                        <div className="col-lg-9 col-sm-6 p-1">
                            <h6 >İzmir Turnuvası</h6>
                        </div>
                        <div className="col-lg-3 col-sm-6 p-1">
                            <span className="d-inline m-1 badge bg-success">3 kişi aranıyor</span>
                        </div>
                    </div>
                    <div className="d-flex card-custom row p-2">
                        <div className="col-lg-8 row col-sm-6 text-center">
                            <div class="col-4 text-center">
                                <BsClockFill size={20} className="text-primary"/>
                                <p>19:00 - 20:00</p>
                            </div>
                            <div class="col-6">
                                <h6 className="text-center">Teams</h6>
                                <div className="match-teams w-100">
                                    <label className="match-team-li p-2">
                                        <Link to="team-detail">Team 1</Link>
                                    </label>
                                    <label className="match-team-li p-2">
                                        <Link to="team-detail">Team 2</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-right-image col-lg-4 col-sm-9">
                            <img className="img-fluid w-100 card-image" src="assets/images/samples/hall.jpg"
                            alt="Card cap" />
                        </div>
                    </div>
                    <div className="card-footer p-2">
                        <div className="footer-left">
                            <Link to="match-detail" className="btn btn-light">
                                Details
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
                                <ul class="dropdown-menu border" aria-labelledby="dropdownMenuButton1">
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
        </div>
        </>
    )
}

export default MyMatchesCard
