import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GiWeight } from "@react-icons/all-files/gi/GiWeight";
import { GiBodyHeight } from "@react-icons/all-files/gi/GiBodyHeight";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { GiPlayerTime } from "@react-icons/all-files/gi/GiPlayerTime";
import { GiBasketballJersey } from "@react-icons/all-files/gi/GiBasketballJersey";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import {
    Link
  } from "react-router-dom";
import "./_favouritePlayer.scss";
import RequestPlayerJoin from '../../modals/request-player-join/RequestPlayerJoin';
import RequestTeamJoin from '../../modals/request-team-join/RequestTeamJoin';

const FavouritePlayerCard = () => {
    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);
    
    const [showRequestTeamJoin, setRequestTeamJoinShow] = useState(false);

    const handleRequestTeamJoinClose = () => setRequestTeamJoinShow(false);
    const handleRequestTeamJoinModal = () => setRequestTeamJoinShow(true);
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />
        <RequestTeamJoin handleRequestTeamJoinClose={handleRequestTeamJoinClose} show={showRequestTeamJoin}  />

        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-players-card">
            <div className="card shadow">
                <h4 className="card-title text-center">Bartu Kocakara</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div className="card-middle-text row">
                        <div class="col-md-2 text-center">
                            <p className="prop-name w-100 badge bg-primary"><GiPlayerTime size={25}/></p>
                            <p>28</p>
                        </div>
                        <div class="col-md-2 text-center">
                            <p className="prop-name w-100 badge bg-primary"><GiWeight size={25} /></p>
                            <p>90</p>
                        </div>
                        <div class="col-md-2 text-center">
                            <p className="prop-name w-100 badge bg-primary"><GiBodyHeight size={25}/></p>
                            <p>1.90</p>
                        </div>
                        <div class="col-md-3 text-center">
                            <p className="prop-name w-100 badge bg-primary"><GoLocation size={25}/></p>
                            <p>İstanbul</p>
                        </div>
                        <div class="col-md-2 text-center">
                            <p className="prop-name w-100 badge bg-primary"><GiBasketballJersey size={25}/></p>
                            <p>SF</p>
                        </div>
                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/player.jpg"
                        alt="Card cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <Link to="player-detail" className="btn btn-light">
                            Player Details
                        </Link>
                    </div>
                    <div className="footer-right d-flex">
                        <Link class="btn btn-light m-2 p-2 text-primary" to="message-detail">
                            <AiOutlineMail className="card-footer-icon" />
                        </Link>
                        <div class="dropdown">
                            <button class="btn btn-light m-2 p-2 text-primary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaHandshake className="card-footer-icon" />
                            </button>
                            <ul class="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton1">
                                <li><Link class="dropdown-item" onClick={handleRequestPlayerJoinModal}><h6 className="p-2">Request join team</h6></Link></li>
                                <li><Link class="dropdown-item" onClick={handleRequestTeamJoinModal}><h6 className="p-2">Request join match</h6></Link></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 className="card-footer-icon" size={26}  />
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

export default FavouritePlayerCard
