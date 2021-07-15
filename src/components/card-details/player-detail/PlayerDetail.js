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
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import { FiMail } from "@react-icons/all-files/fi/FiMail";

import {
    Link
  } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./_playerDetail.scss";
import RequestPlayerJoin from '../../modals/request-player-join/RequestPlayerJoin';
import Teams from "./teams/Teams";
import Matches from './matches/Matches';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayerDetail = () => {

    const [showRequestPlayerJoin, setRequestPJShow] = useState(false);

    const handleRequestPlayerJoinClose = () => setRequestPJShow(false);
    const handleRequestPlayerJoinModal = () => setRequestPJShow(true);

    const notifyFavPlayer = () => toast("Player successfully added your favourites", {
        className: 'warning-background',
        progressClassName: 'toast-progress',
        id:"playerWidget"
    });
    return (
        <>
        <RequestPlayerJoin handleRequestPlayerJoinClose={handleRequestPlayerJoinClose} show={showRequestPlayerJoin}  />
            <div class="col-12">
                <div className="row"> 
                    <div class="card">
                        <div class="card-body py-4 px-5">
                            <div class="align-items-center row m-0 p-0">
                                <div class="avatar avatar-xl col-md-1 player-detail-avatar">
                                    <img src="assets/images/faces/1.jpg" className="d-block" alt="Face 1" />
                                    <i class="bi bi-award"></i>
                                    <i class="bi bi-award"></i>
                                    <i class="bi bi-award"></i>
                                    <div className="d-flex mt-3">
                                        <GoLocation size={20}/>
                                        <h6 class="font-bold">İzmir</h6>
                                    </div>
                                </div>
                                <div class="col-md-2 text-center">
                                    <h6 class="font-bold">John Duck</h6>
                                    <h6 class="text-muted mb-0">@johnducky</h6>
                                    <span><GoVerified className="text-success" size={20}/></span>

                                </div>
                                <div class="col-md-1  text-center">
                                    <h6 class="font-bold">Pos.</h6>
                                    <h6 class="text-muted mb-0">C, PF, SF </h6>
                                </div>
                                <div class="col-md-3  text-center">
                                    <h6 class="font-bold">Email</h6>
                                    <p class="text-muted mb-0">bartuu_436@hotmail.com</p>
                                </div>
                                <div class="col-md-2 text-center">
                                    <h6 class="font-bold">Phone</h6>
                                    <h6 class="text-muted mb-0">+90 555 667 66 80</h6>
                                </div>
                                <div className="buttons col-md-3">
                                    <div className="d-flex justify-content-center">
                                        <Link className="d-flex p-2 m-2 text-light bg-warning rounded" onClick={notifyFavPlayer}>
                                            Add favourites <span className="fw-bold"> + </span>
                                        </Link>
                                        <Link to="message-detail" className="m-2">
                                            <FiMail className="m-2 pd-icon" size={27} />
                                        </Link>
                                        <div class="dropdown m-2">
                                            <Link role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FiShare2 className="m-2 pd-icon" size={27}/>
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
                                    <button className="btn btn-warning m-auto " onClick={handleRequestPlayerJoinModal}><FaHandshake className="player-detail-handshake" />Request Join Match </button>
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
                                    <div class="tab-pane fade show active col-10 m-auto" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <FullCalendar
                                            plugins={[ dayGridPlugin ]}
                                            initialView="dayGridMonth"
                                        />
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
