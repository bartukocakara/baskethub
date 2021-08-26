import React from 'react';
import "./_trainingDetail.scss";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { GoListOrdered } from "@react-icons/all-files/go/GoListOrdered";
import { AiFillAppstore } from "@react-icons/all-files/ai/AiFillAppstore";
import { FaHandPeace } from "@react-icons/all-files/fa/FaHandPeace";


import CourtGallery from './tabs/CourtGallery';
import News from './tabs/News';
import TrainingCalendar from './tabs/TrainingCalendar';
import PriceInfo from './tabs/PriceInfo';
import Trainers from './tabs/Trainers';
import PrivacyOptions from './tabs/PrivacyOptions';

const TrainingDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
            <h5 class="card-title text-center">İzmir Training</h5>
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="true">Calenar <FaCalendarAlt className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">Calendar <FaHandPeace className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="price-info-tab" data-bs-toggle="tab" href="#price-info" role="tab" aria-controls="price-info" aria-selected="false">Price Info <GiWhistle className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="gallery-tab" data-bs-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false">Court Gallery <GiWhistle className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="trainers-tab" data-bs-toggle="tab" href="#trainers" role="tab" aria-controls="trainers" aria-selected="false">Trainers <AiFillAppstore className="m-1"/></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="privacy-options-tab" data-bs-toggle="tab" href="#privacy-options" role="tab" aria-controls="privacy-options" aria-selected="false">Privacy Options<GoListOrdered className="m-1"/></a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                            <News/>
                        </div>
                        <div class="tab-pane fade" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                            <TrainingCalendar />
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
