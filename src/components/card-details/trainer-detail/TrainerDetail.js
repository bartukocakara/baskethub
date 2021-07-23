import React from 'react'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

import {
    Link
  } from "react-router-dom";
  import {BiShareAlt} from "@react-icons/all-files/bi/BiShareAlt";

import "./_trainerDetail.scss";

const TrainerDetail = () => {
    return (
        <>
            <div class="col-12">
                <div className="row"> 
                    <div class="card">
                        <div class="card-body py-4 px-5">
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-xl">
                                    <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                </div>
                                <div class="ms-3 name">
                                    <h5 class="font-bold">John Duck</h5>
                                    <h6 class="text-muted mb-0">@johnducky</h6>
                                </div>
                                <div class="ms-5">
                                    <GoLocation />
                                    <p class="font-bold">İzmir</p>
                                </div>
                                <div class="ms-5 name">
                                    <h5 class="font-bold">Positions</h5>
                                    <h6 class="text-muted mb-0">C, PF, SF </h6>
                                </div>
                                <div className="buttons text-center player-detail-buttons ml-5">
                                    <button className="btn btn-warning share">Takip Et +</button>
                                    <Link to="message-detail" className="btn btn-light message">
                                        <i className='bi bi-envelope bi-sub fs-4'></i>
                                    </Link>
                                    <button className="btn btn-light share fs-4"><BiShareAlt/></button>
                                    <button className="btn btn-warning request-join p-3">Request Join Match <FaHandshake className="player-detail-handshake" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body px-3 py-4-5 profile-widget">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="stats-icon purple">
                                            <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                    <h6 className="text-muted font-semibold">Profile Views</h6>
                                    <h6 className="font-extrabold mb-0">112.000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5 profile-widget">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon blue">
                                    <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="text-muted font-semibold">Followers</h6>
                                    <h6 className="font-extrabold mb-0">183.000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5 profile-widget">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon green">
                                    <BiCheckDouble style={{ color:"#fff", fontSize:"30px" }}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="text-muted font-semibold">Match Joined</h6>
                                    <h6 className="font-extrabold mb-0">80.000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card">
                        <div className="card-body px-3 py-4-5 profile-widget">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon green">
                                    <HiCheck style={{ color:"#fff", fontSize:"30px", }}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="text-muted font-semibold">Match Accepted</h6>
                                    <h6 className="font-extrabold mb-0">112</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Available Times</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Matches Played</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Teams</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nulla ut nulla
                                        neque. Ut hendrerit nulla a euismod pretium.
                                        Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis
                                        fringilla. Sed id
                                        tincidunt orci, et volutpat ligula.
                                        Aliquam sollicitudin sagittis ex, a rhoncus nisl feugiat quis. Lorem
                                        ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Nunc ultricies ligula a tempor vulputate. Suspendisse pretium mollis
                                        ultrices.</p>
                                </div>
                                <div class="tab-pane fade mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h1>LABEL</h1>
                                </div>
                                <div class="tab-pane fade player-teams row mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <h1>LABEL</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default TrainerDetail
