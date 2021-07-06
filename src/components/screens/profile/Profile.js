import React from 'react'
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import { GoVerified } from "@react-icons/all-files/go/GoVerified";
import {
    Link
  } from "react-router-dom";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./_profile.scss";
import RequestList from './partials/request-list/RequestList';
import Matches from './partials/matches/Matches';

const Profile = () => {
    return (
        <div className="col-12 col-lg-12">
            <div className="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body py-4 px-5">
                            <div class="align-items-center row">
                                <div class="avatar avatar-xl col-md-1">
                                    <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                </div>
                                <div class="ms-3 name col-md-2 text-center">
                                    <h5 class="font-bold">John Duck</h5>
                                    <h6 class="text-muted mb-0">@johnducky</h6>
                                    <span><GoVerified className="text-success" size={20}/></span>
                                </div>
                                <div class="ms-5 col-md-1">
                                    <GoLocation />
                                    <p class="font-bold">İzmir</p>
                                </div>
                                <div class="ms-5 col-md-5">
                                </div>
                                <div class="col-md-1 ml-auto">
                                    <Link to="profile-edit">
                                        <FiEdit size={30} data-toggle="tooltip" data-placement="top" title="Edit"/>
                                    </Link>
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
                                <a class="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Available Times</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="requests-tab" data-bs-toggle="tab" href="#requests" role="tab" aria-controls="requests" aria-selected="false">Requests List</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active col-10 m-auto" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                                <FullCalendar
                                plugins={[ dayGridPlugin ]}
                                initialView="dayGridMonth"
                                />
                            </div>
                            <div class="tab-pane fade col-11 m-auto" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                            {
                                        [...Array(5)].map((matchesList) => (
                                            <>
                                                <Matches />
                                            </>
                                        ))
                                    }
                            </div>
                            <div class="tab-pane fade" id="requests" role="tabpanel" aria-labelledby="requests-tab">
                                <RequestList />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
