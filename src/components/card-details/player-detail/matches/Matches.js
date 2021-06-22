import React from 'react'
import {
    Link
  } from "react-router-dom";

const Matches = () => {
    return (
        // <div className="media ended-match d-flex align-items-center border rounded p-2 m-2">
        //     <div className="name flex-grow-1">
        //         <Link to="ended-match-detail"><h6 className="mb-0">Match Name</h6></Link>
        //     </div>
        //     <div className="name flex-grow-1">
        //         <h6 className="mb-0">Karşıyaka</h6>
        //         <span className="text-xs">Spor salonu</span>
        //     </div>
        //     <div className="name flex-grow-1">
        //         <h6>26/12/2022 - 18:00 - 19:00</h6>
        //     </div>
        // </div>
        <div class="card component-card_8">
            <div class="card-body">
                <div class="progress-order">
                    <div class="progress-order-header">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-12">
                                <h6 className="text-dark"><Link to="ended-match-detail">Details</Link></h6>
                            </div>
                            <div class="col-md-6 pl-0 col-sm-6 col-12 text-right">
                                <span class="badge badge-info">IN PROGRESS</span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-order-body">
                        <div class="row mt-4">
                            <div class="col-md-12 d-flex">
                                <ul class="list-inline badge-collapsed-img mb-0 mb-3">
                                
                                    <li class="list-inline-item">
                                        <Link to="team-detail">Team 1 </Link>
                                    </li>
                                    <li class="list-inline-item">
                                        <Link to="team-detail">Team 2</Link>
                                    </li>
                                </ul>
                                <div className="col-5 court-name">
                                    <h6 className="ml-3">Alsancak Spor salonu</h6>
                                </div>
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
    )
}

export default Matches
