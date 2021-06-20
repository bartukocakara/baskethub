import React, { useState } from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import Share from '../../modals/Share/Share';

import {
    Link
  } from "react-router-dom";
import "./_favouriteCourt.scss";
     

const FavouriteCourtCard = () => {
    const [showShareModal, setShareModalShow] = useState(false);

    const handleShareModalClose = () => setShareModalShow(false);
    const handleShowShareModal = () => setShareModalShow(true); 
    return (
        <>
        <Share handleShareModalClose={handleShareModalClose} show={showShareModal} />

        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-courts-card">
            <div className="card">
                <h4 className="card-title text-center">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="hall" srcset="" />
                    </div>
                    <div className="card-middle-text d-flex">
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Hijyen</p>
                            <p>5/10</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Güvenilirlik</p>
                            <p>8/10</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name w-100 p-2 badge bg-primary">Cevap Hızı</p>
                            <p>7/10</p>
                        </div>

                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg"
                        alt="Card cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <Link to="fav-court-detail" className="btn btn-light">
                            Court Details
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
                        <FiShare2 className="card-footer-icon" onClick={handleShowShareModal} />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FavouriteCourtCard
