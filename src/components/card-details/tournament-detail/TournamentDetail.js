import React from 'react';
import "./_tournamentDetail.scss";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { AiFillGift } from "@react-icons/all-files/ai/AiFillGift";
import { GiTargetPrize } from "@react-icons/all-files/gi/GiTargetPrize";
import { GoListOrdered } from "@react-icons/all-files/go/GoListOrdered";
import { AiOutlineApartment } from "@react-icons/all-files/ai/AiOutlineApartment";
import { AiFillAppstore } from "@react-icons/all-files/ai/AiFillAppstore";


import Schema from './schema/Schema';
import Calendar from './calendar/Calendar';
import Rules from './rules/Rules';
import Referees from './referees/Referees';
import Teams from './teams/Teams';
import MyTeam from './my-team/MyTeam';
import Prize from './prize/Prize';
import ParticipantGift from './participant-gift/ParticipantGift';
const TournamentDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">İzmir Tournament</h5>
                </div>
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Schema<AiOutlineApartment className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Calendar<FaCalendarAlt className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Rules<FaBook className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="referees-tab" data-bs-toggle="tab" href="#referees" role="tab" aria-controls="referees" aria-selected="false">Referees <GiWhistle className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams<AiFillAppstore className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="my-team-tab" data-bs-toggle="tab" href="#my-team" role="tab" aria-controls="my-team" aria-selected="false">My Team<GoListOrdered className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="my-team-tab" data-bs-toggle="tab" href="#my-team" role="tab" aria-controls="my-team" aria-selected="false">Prize<GiTargetPrize className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="my-team-tab" data-bs-toggle="tab" href="#my-team" role="tab" aria-controls="my-team" aria-selected="false">Participant Gift<AiFillGift className="m-1"/></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <Schema />
                        </div>
                        <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <Calendar />
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <Rules />
                        </div>
                        <div class="tab-pane fade" id="referees" role="tabpanel" aria-labelledby="referees-tab">
                            <h6><Referees /></h6>
                        </div>
                        <div class="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                            <h6><Teams/></h6>
                        </div>
                        <div class="tab-pane fade" id="my-team" role="tabpanel" aria-labelledby="my-team-tab">
                            <h6><MyTeam/></h6>
                        </div>
                        <div class="tab-pane fade" id="my-team" role="tabpanel" aria-labelledby="my-team-tab">
                            <h6><Prize/></h6>
                        </div>
                        <div class="tab-pane fade" id="my-team" role="tabpanel" aria-labelledby="my-team-tab">
                            <h6><ParticipantGift/></h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default TournamentDetail
