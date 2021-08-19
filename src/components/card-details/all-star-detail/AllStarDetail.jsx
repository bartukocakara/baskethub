import React from 'react'
import EventCalendar from './tabs/EventCalendar'
import Players from './tabs/Players'
import Prizes from './tabs/Prizes'

import "./_allStarDetail.scss";

const AllStarDetail = () => {
    return (
        <div>
            <h6 className="text-center">All Star Detail</h6>
            <div className="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-header">
                            <h5>Amsterdam</h5>
                            <p></p>
                        </div>
                        <div class="card-body">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="assets/images/samples/basket-salon1.jpg" class="all-star-slider-img d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="assets/images/samples/basket-salon2.jpg" class="all-star-slider-img d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="event-calendar-tab" data-bs-toggle="tab" href="#event-calendar" role="tab" aria-controls="event-calendar" aria-selected="true">Calendar</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="false">Players</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="prizes-tab" data-bs-toggle="tab" href="#prizes" role="tab" aria-controls="prizes" aria-selected="false">Prizes</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="event-calendar" role="tabpanel" aria-labelledby="event-calendar-tab">
                                        <EventCalendar/>
                                    </div>
                                    <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                                        <Players/>
                                    </div>
                                    <div class="tab-pane fade" id="prizes" role="tabpanel" aria-labelledby="prizes-tab">
                                        <Prizes/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AllStarDetail
