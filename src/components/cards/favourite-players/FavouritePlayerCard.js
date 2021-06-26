import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import {
    Link
  } from "react-router-dom";
import "./_favouritePlayer.scss";
import RequestPlayerJoin from '../../modals/request-player-join/RequestPlayerJoin';

const FavouritePlayerCard = () => {
    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />

        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-players-card">
            <div className="card shadow">
                <h4 className="card-title text-center">Bartu Kocakara</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div className="card-middle-text d-flex">
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Yaş</p>
                            <p>28</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Kilo</p>
                            <p>90</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Boy</p>
                            <p>1.90</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Konum</p>
                            <p>İstanbul</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Posizyon</p>
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
                    <Link to="message-detail">
                        <AiOutlineMail className="card-footer-icon" />
                    </Link>
                    <Link onClick={handleRequestPlayerJoinModal}>
                        <FaHandshake className="card-footer-icon" />
                    </Link>
                    <div class="dropdown">
                        <Link class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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

export default FavouritePlayerCard
