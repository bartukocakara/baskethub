import React from 'react';
import "./_tournamentDetail.scss";

import Schema from './schema/Schema';
import Calendar from './calendar/Calendar';
import Rules from './rules/Rules';

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
                            <a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Schema</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Calendar</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Rules</a>
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
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default TournamentDetail
