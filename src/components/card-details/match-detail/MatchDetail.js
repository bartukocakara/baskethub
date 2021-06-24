import React, { useState } from 'react'
import {
    Link
  } from "react-router-dom";
import MatchTeamList from '../match-team-list/MatchTeamList';
import CourtReservation from '../../modals/CourtReservation/CourtReservation';
import Share from '../../modals/Share/Share';
import {FaHandshake} from "@react-icons/all-files/fa/FaHandshake";
import {BiShareAlt} from "@react-icons/all-files/bi/BiShareAlt";

import "./_matchDetail.scss";

const MatchDetail = () => {

    const [showCourtRes, setCourtResShow] = useState(false);

    const handleCourtResModalClose = () => setCourtResShow(false);
    const handleShowCourtResModal = () => setCourtResShow(true);

    const [showShareModal, setShareModalShow] = useState(false);

    const handleShareModalClose = () => setShareModalShow(false);
    const handleShowShareModal = () => setShareModalShow(true);
    
    return (
        <>
        <CourtReservation handleCourtResModalClose={handleCourtResModalClose} show={showCourtRes} />
        <Share handleShareModalClose={handleShareModalClose} show={showShareModal} />
        
        <div className="row">
            <h5 className="text-center m-4">Balçova Spor Salonu</h5>
            <div className="col-lg-6 col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4>Court Photos</h4>
                    </div>
                    <div class="card-body">
                        <div id="carouselExampleCaptions" class="carousel slide" style={{ height:"200px" }} data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class=""></li>
                                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item carousel-item-next carousel-item-start">
                                    <img src="assets/images/samples/basket-salon1.jpg" class="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                                <div class="carousel-item active carousel-item-start">
                                    <img src="assets/images/samples/basket-salon2.jpg" class="d-block w-100" style={{ height:"200px" }} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div class="card">
                    <div class="card-content">
                        <div class="card-body text-center   ">
                            <div className="buttons text-center">
                            
                                <Link variant="primary" class="btn btn-light handshake" onClick={handleShowCourtResModal}>
                                    <FaHandshake />
                                    </Link>
                                <Link to="team-chat" className="btn btn-light message">
                                    <i className='bi bi-envelope bi-sub fs-4 text-gray-600'></i>
                                </Link>
                                <Link variant="primary" className="btn btn-light share" onClick={handleShowShareModal}>
                                    <BiShareAlt />
                                </Link>
                            </div>
                            <br />
                            <h4 class="card-title text-center">Match Details</h4>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Date - Time : <span class="badge text-dark">21/06/2021 | 12:00 - 13:00</span>
                            </label>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Player Count <span class="badge text-dark">8</span>
                            </label>
                            <hr />
                            <label class="btn-light text-dark p-2">
                                Player Need <span class="badge text-dark">1-3</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <MatchTeamList />
        </div>
        </>
    )
}

export default MatchDetail
