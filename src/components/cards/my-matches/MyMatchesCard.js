import React from 'react'
import "./_myMatchesCard.scss";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
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
                    <div className="card-middle-text d-flex">
                        <div class="car-middle-div">
                            <p className="prop-name">Maç Saati</p>
                            <p>19:00 - 20:00</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name">Oyuncu sayısı</p>
                            <p>8</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name">Gerekli oyuncu</p>
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
                    <div className="footer-right">
                        <Link to="match-chat">
                            <AiOutlineMail className="card-footer-icon"/>
                        </Link>
                        <Link>
                            <FiShare2 className="card-footer-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MyMatchesCard
