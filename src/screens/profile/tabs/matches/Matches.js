import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import {
    Link
  } from "react-router-dom";
import RateMatchModal from '../../../../components/modals/rate-match/RateMatchModal';

const Matches = () => {
    const [showRating, setRatingShow] = useState(false);
  
    const handleRatingClose = () => setRatingShow(false);
    const handleRatingShow = () => setRatingShow(true);
    return (
        <>
        <RateMatchModal handleRatingClose={handleRatingClose} showRating={showRating} />
        {
                        [...Array(5)].map((matchesList) => (
                            <div>
                            <h6 className="text-center">14 Haziran</h6>
                            <div class="card component-card_8 m-auto mb-3">
                                <div class="card-body p-3">
                                    <div class="progress-order">
                                        <div class="progress-order-body">
                                            <div class="row mt-4">
                                                <div class="col-md-12 row">
                                                    <ul class="list-inline col-md-3 badge-collapsed-img mb-0 mb-3">
                                                    <h6 className="text-dark"><Link to="ended-match-detail">Details</Link></h6>
                    
                                                        <li class="list-inline-item">
                                                            <Link to="team-detail">Team 1 </Link>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <Link to="team-detail">Team 2</Link>
                                                        </li>
                                                    </ul>
                                                    <div className=" col-md-3 court-name">
                                                    <span class="badge bg-primary m-3">IN PROGRESS</span>
                    
                                                        <h6 className="ml-3">Alsancak Spor salonu</h6>
                                                    </div>
                                                    <AvatarGroup max={4} className="col-md-3">
                                                        <Avatar alt="Remy Sharp" src="assets/images/faces/2.jpg" />
                                                        <Avatar alt="Travis Howard" src="assets/images/faces/2.jpg" />
                                                        <Avatar alt="Cindy Baker" src="assets/images/faces/2.jpg" />
                                                        <Avatar alt="Agnes Walker" src="assets/images/faces/2.jpg" />
                                                        <Avatar alt="Trevor Henderson" src="assets/images/faces/2.jpg" />
                                                    </AvatarGroup>
                                                    <button class="btn btn-sm btn-primary col-md-3 p-0 m-0 h-50" onClick={handleRatingShow}>
                                                        Rate this match
                                                    </button>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <span class=" p-o-percentage mr-4">60%</span>
                                                    <div class="progress p-o-progress mt-2">
                                                        <div class="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))
                    }
        
        </>
    )
}

export default Matches
