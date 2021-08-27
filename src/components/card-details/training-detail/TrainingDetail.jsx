import React from 'react';
import "./_trainingDetail.scss";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaHandPeace } from "@react-icons/all-files/fa/FaHandPeace";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { RiErrorWarningFill } from "@react-icons/all-files/ri/RiErrorWarningFill";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { IoMdFitness } from "@react-icons/all-files/io/IoMdFitness";
import { FiList } from "@react-icons/all-files/fi/FiList";
import { RiGitRepositoryPrivateLine } from "@react-icons/all-files/ri/RiGitRepositoryPrivateLine";
import { RiGalleryFill } from "@react-icons/all-files/ri/RiGalleryFill";
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";


import CourtGallery from './tabs/CourtGallery';
import News from './tabs/News';
import TrainingCalendar from './tabs/TrainingCalendar';
import PriceInfo from './tabs/PriceInfo';
import Trainers from './tabs/Trainers';
import PrivacyOptions from './tabs/PrivacyOptions';
import Players from './tabs/Players';
import TraininigTypes from './tabs/TrainingTypes';
import TrainingItems from './tabs/TrainingItems';
import Messages from './tabs/Messages';

const TrainingDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
            <h5 class="card-title text-center">İzmir Training</h5>
            <div class="progress progress-info w-50 m-auto">
                <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <div className="d-flex m-auto justify-content-between px-5 py-1">
                <span className="fw-bold d-inline mx-2 px-4">Dates Decided <AiFillCheckCircle size={22} className="text-success"/></span>
                <span className="fw-bold d-inline mx-2 px-4">Courts Reserved <AiFillCheckCircle size={22} className="text-success"/></span>
                <span className="fw-bold d-inline mx-2 px-4">Payment Completed<RiErrorWarningFill size={22} className="text-warning"/></span>
                <span className="fw-bold d-inline mx-2 px-4">All Players Activated<MdCancel size={22} className="text-danger"/></span>
            </div>
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Calendar <FaCalendarAlt className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="true">Players <FaUsers className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="training-types-tab" data-bs-toggle="tab" href="#training-types" role="tab" aria-controls="training-types" aria-selected="false">Training Types <FiList className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="training-items-tab" data-bs-toggle="tab" href="#training-items" role="tab" aria-controls="training-items" aria-selected="false">Training Items <IoMdFitness className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="chat-tab" data-bs-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="false">Chat <AiOutlineMail className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">News <FaHandPeace className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="price-info-tab" data-bs-toggle="tab" href="#price-info" role="tab" aria-controls="price-info" aria-selected="false">Price Info <FaMoneyCheckAlt className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="gallery-tab" data-bs-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false">Court Gallery <RiGalleryFill className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="trainers-tab" data-bs-toggle="tab" href="#trainers" role="tab" aria-controls="trainers" aria-selected="false">Trainers <GiWhistle className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="privacy-options-tab" data-bs-toggle="tab" href="#privacy-options" role="tab" aria-controls="privacy-options" aria-selected="false">Privacy Options<RiGitRepositoryPrivateLine className="m-1"/></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                            <TrainingCalendar />
                        </div>
                        <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                            <Players/>
                        </div>
                        <div class="tab-pane fade" id="training-types" role="tabpanel" aria-labelledby="training-types-tab">
                            <TraininigTypes/>
                        </div>
                        <div class="tab-pane fade" id="training-items" role="tabpanel" aria-labelledby="training-items-tab">
                            <TrainingItems/>
                        </div>
                        <div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab">
                            <Messages/>
                        </div>
                        <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                            <News/>
                        </div>
                        <div class="tab-pane fade" id="price-info" role="tabpanel" aria-labelledby="price-info-tab">
                            <PriceInfo />
                        </div>
                        <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                            <CourtGallery />
                        </div>
                        <div class="tab-pane fade" id="trainers" role="tabpanel" aria-labelledby="trainers-tab">
                            <Trainers />
                        </div>
                        <div class="tab-pane fade" id="privacy-options" role="tabpanel" aria-labelledby="privacy-options-tab">
                            <PrivacyOptions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrainingDetail
