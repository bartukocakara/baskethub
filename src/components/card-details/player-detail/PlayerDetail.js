import React, { useState } from 'react'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
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

import "./_playerDetail.scss";
import RequestPlayerJoin from '../../modals/request-player-join/RequestPlayerJoin';
import Teams from "./teams/Teams";
import Matches from './matches/Matches';

const PlayerDetail = () => {

    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />
            <div class="col-12">
                <div className="row"> 
                    <div class="card">
                        <div class="card-body py-4 px-5">
                            <div class="d-flex align-items-center row">
                                <div class="avatar avatar-xl col-md-1 player-detail-avatar">
                                    <img src="assets/images/faces/1.jpg" className="d-block" alt="Face 1" />
                                    <i class="bi bi-award"></i>
                                    <i class="bi bi-award"></i>
                                    <i class="bi bi-award"></i>
                                </div>
                                <div class="ms-3 name col-md-2">
                                    <h5 class="font-bold">John Duck</h5>
                                    <h6 class="text-muted mb-0">@johnducky</h6>
                                </div>
                                <div class="ms-5 col-1">
                                    <GoLocation />
                                    <p class="font-bold">İzmir</p>
                                </div>
                                <div class="ms-5 name col-md-2">
                                    <h5 class="font-bold">Positions</h5>
                                    <h6 class="text-muted mb-0">C, PF, SF </h6>
                                </div>
                                <div className="buttons player-detail-buttons col-md-4">
                                    <div className="d-flex">

                                    <button className="btn btn-warning">Add to favourite +</button>
                                    <Link to="message-detail" className="btn btn-primary">
                                        <i className='bi bi-envelope bi-sub fs-5 '></i>
                                    </Link>
                                    <div class="dropdown">
                                    <Link className="btn btn-primary share-button" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FiShare2 />
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
                                <button className="btn btn-warning request-join m-auto" onClick={handleRequestPlayerJoinModal}><FaHandshake className="player-detail-handshake" />Request Join Match </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6">
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
                    <div className="col-12 col-lg-3 col-md-6">
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
                    <div className="col-12 col-lg-3 col-md-6">
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
                    <div className="col-12 col-lg-3 col-md-6">
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
                                    {
                                        [...Array(5)].map((matchesList) => (
                                            <>
                                                <Matches />
                                            </>
                                        ))
                                    }
                                    <nav aria-label="Page navigation example ">
                                        <ul className="pagination pagination-primary match-pagination">
                                            <li className="page-item"><Link class="page-link">Prev</Link></li>
                                            <li className="page-item"><Link class="page-link">1</Link></li>
                                            <li className="page-item active"><Link class="page-link">2</Link></li>
                                            <li className="page-item"><Link class="page-link">3</Link></li>
                                            <li className="page-item"><Link class="page-link">Next</Link></li>
                                        </ul>
                                    </nav>
                                    </div>
                                    <div class="tab-pane fade player-teams row mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    {
                                        [...Array(10)].map((teamsList) => (
                                            <Teams />
                                        ))
                                        }
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

export default PlayerDetail
