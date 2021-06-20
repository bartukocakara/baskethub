import React from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import {
    Link
  } from "react-router-dom";
import "./_trainerCard.scss";

const TrainerCard = () => {
    return (
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-players-card">
            <div className="card">
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
                    <div className="footer-right">
                    <Link to="message-detail">
                        <AiOutlineMail className="card-footer-icon" />
                    </Link>
                    <Link >
                        <FaHandshake className="card-footer-icon" />
                    </Link>
                    <Link >
                        <FiShare2 className="card-footer-icon" />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerCard
