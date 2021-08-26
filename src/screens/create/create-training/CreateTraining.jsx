import React from "react";
import Payment from "../create-training/tabs/Payment";
import Courts from "./tabs/Courts";
import Date from "./tabs/Date";
import Players from "./tabs/Players";
import Trainers from "./tabs/Trainers";
import "./_createTraining.scss";

const CreateTraining = () => {
    return (
        <div>
            <h5 className="text-center">Create Training</h5>
            <div class="container card">

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="v-pills-date-tab" data-bs-toggle="pill" href="#v-pills-date" role="tab" aria-controls="v-date-home" aria-selected="true">Date</a>
                                    <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false">Players</a>
                                    <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false">Court</a>
                                    <a class="nav-link" id="v-pills-trainers-tab" data-bs-toggle="pill" href="#v-pills-trainers" role="tab" aria-controls="v-pills-trainers" aria-selected="false">Trainer</a>
                                    <a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false">Payment</a>
                                </div>
                            </div>
                            <div class="col-9">
                                <form>
                                <div class="tab-content create-training" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-date" role="tabpanel" aria-labelledby="v-pills-date-tab">
                                       <Date/>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-players" role="tabpanel" aria-labelledby="v-pills-players-tab">
                                        <Players />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-courts" role="tabpanel" aria-labelledby="v-pills-courts-tab">
                                        <Courts />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-trainers" role="tabpanel" aria-labelledby="v-pills-trainers-tab">
                                       <Trainers />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                                       <Payment />
                                    </div>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className="btn btn-success btn-md w-25">Create</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTraining
