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
import MatchOptions from './partials/match-options/MatchOptions';
import Licence from './partials/licence/Licence';

const Profile = () => {
    return (
        <div className="col-12 col-lg-12">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body py-4 px-5">
                            <div className="align-items-center row">
                                <div className="avatar avatar-xl col-md-1 player-detail-avatar">
                                    <img src="assets/images/faces/1.jpg" className="d-block" alt="Face 1" />
                                    <i className="bi bi-award"></i>
                                    <i className="bi bi-award"></i>
                                    <i className="bi bi-award"></i>
                                    <div className="d-flex mt-3">
                                        <GoLocation size={20}/>
                                        <h6 className="font-bold">İzmir</h6>
                                    </div>
                                </div>
                                <div className="ms-3 name col-md-2 text-center">
                                    <h6 className="font-bold">John Duck, <span>28</span></h6>
                                    <span><GoVerified className="text-success" size={20}/></span>
                                </div>
                                <div className="col-md-3  text-center">
                                    <h6 className="font-bold">Email</h6>
                                    <p className="text-muted mb-0">bartuu_436@hotmail.com</p>
                                </div>
                                <div className="col-md-2 text-center">
                                    <h6 className="font-bold">Phone</h6>
                                    <h6 className="text-muted mb-0">+90 555 667 66 80</h6>
                                </div>
                                <div className="col-md-1 ml-auto">
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
                <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Available Times</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="requests-tab" data-bs-toggle="tab" href="#requests" role="tab" aria-controls="requests" aria-selected="false">Requests List</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="matchOptions-tab" data-bs-toggle="tab" href="#matchOptions" role="tab" aria-controls="matchOptions" aria-selected="false">Create Match Options</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licence</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active col-10 m-auto" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                                <FullCalendar
                                plugins={[ dayGridPlugin ]}
                                initialView="dayGridMonth"
                                />
                            </div>
                            <div className="tab-pane fade col-11 m-auto" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                            {
                                        [...Array(5)].map((matchesList) => (
                                            <>
                                                <Matches />
                                            </>
                                        ))
                                    }
                            </div>
                            <div className="tab-pane fade" id="requests" role="tabpanel" aria-labelledby="requests-tab">
                                <RequestList />
                            </div>
                            <div className="tab-pane fade" id="matchOptions" role="tabpanel" aria-labelledby="matchOptions-tab">
                                <MatchOptions />
                            </div>
                            <div className="tab-pane fade" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                                <Licence />
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
