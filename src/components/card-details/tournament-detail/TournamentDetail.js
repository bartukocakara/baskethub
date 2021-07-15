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
import { FaHandPeace } from "@react-icons/all-files/fa/FaHandPeace";

import Schema from './schema/Schema';
import TournamentCalendar from './calendar/Calendar';
import Rules from './rules/Rules';
import Referees from './referees/Referees';
import Teams from './teams/Teams';
import MyTeam from './my-team/MyTeam';
import Prize from './prize/Prize';
import ParticipantGift from './participant-gift/ParticipantGift';
import "./_tournamentDetail.scss";
import CourtGallery from './court-gallery/CourtGallery';
import News from './news/News';
const TournamentDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
            <h5 class="card-title text-center">İzmir Tournament</h5>
                
        
                
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Calendar<FaCalendarAlt className="m-1"/> </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="schema-tab" data-bs-toggle="tab" href="#schema" role="tab" aria-controls="schema" aria-selected="false">Schema<AiOutlineApartment className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">News<FaHandPeace className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="rules-tab" data-bs-toggle="tab" href="#rules" role="tab" aria-controls="rules" aria-selected="false">Rules<FaBook className="m-1"/></a>
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
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="court-gallery-tab" data-bs-toggle="tab" href="#court-gallery" role="tab" aria-controls="court-gallery" aria-selected="false">Court Gallery<AiFillGift className="m-1"/></a>
                        </li>
                        
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                            <News/>
                        </div>
                        <div class="tab-pane fade" id="schema" role="tabpanel" aria-labelledby="schema-tab">
                            <Schema />
                        </div>
                        <div class="tab-pane active show" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                            <TournamentCalendar />
                        </div>
                        <div class="tab-pane fade" id="rules" role="tabpanel" aria-labelledby="rules-tab">
                            <Rules />
                        </div>
                        <div class="tab-pane fade" id="referees" role="tabpanel" aria-labelledby="referees-tab">
                            <Referees />
                        </div>
                        <div class="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                            <Teams/>
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
                        <div class="tab-pane fade" id="court-gallery" role="tabpanel" aria-labelledby="court-gallery-tab">
                            <CourtGallery/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default TournamentDetail
