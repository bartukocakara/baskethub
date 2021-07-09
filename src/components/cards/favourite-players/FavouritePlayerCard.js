import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GiPositionMarker } from "@react-icons/all-files/gi/GiPositionMarker";
import { GiBasketballJersey } from "@react-icons/all-files/gi/GiBasketballJersey";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { FiAward } from "@react-icons/all-files/fi/FiAward";

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

        <div className="col-md-6">
            <div class="card card-widget widget-user shadow">
                <div class="widget-user-header">
                    <h6 class="float-left"><Link to="player-detail">Eray Kaptan</Link></h6>
                </div>
                <div className="player-share d-flex btn-group">
                    <Link class="btn btn-light mt-2" to="message-detail">
                        <AiOutlineMail className="card-footer-icon text-primary" size={25} />
                    </Link>
                    <div class="dropdown">
                        <Link class="btn btn-light m-2 p-2 text-primary" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaHandshake className="card-footer-icon"  />
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link class="dropdown-item text-center" onClick={handleRequestPlayerJoinModal}>Request join match </Link></li>
                            <li><Link class="dropdown-item text-center" onClick={handleRequestTeamJoinModal}>Request join team </Link></li>
                        </ul>
                    </div>
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
                <div class="widget-user-image">
                    <img class="img-circle elevation-2"  src="assets/images/samples/player.jpg" alt="User Avatar" />
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-md-4 co-lg-4">
                            <div class="description-block text-center">
                            <h6 class="description-header">3,200</h6>
                            <span class="description-text"><GiBasketballJersey size={25} className="text-primary"/></span>
                            </div>
                        
                        </div>
                        <div class="col-md-4 co-lg-4">
                            <div class="description-block text-center">
                            <h6 class="description-header">35</h6>
                            <span class="description-text"><FiAward size={25} className="text-primary"/></span>
                        </div>
                        </div>
                        <div class="col-md-4 co-lg-4">
                            <div class="description-block text-center">
                            <h6 class="description-header">İstanbul</h6>
                            <span class="description-text"><GiPositionMarker size={25} className="text-primary"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FavouritePlayerCard
