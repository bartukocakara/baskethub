import React from 'react'
import CourtOption from './tabs/CourtOption'
import DateRange from './tabs/DateRange'
import Players from './tabs/Players'
import PaymentType from './tabs/PaymentType'
import Privacy from './tabs/Privacy'
import "./_createSubscription.scss";

const CreateSubscription = () => {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="card p-3">
                    <div class="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-date-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="true">Date</a>
                                <a class="nav-link" id="v-pills-court-option-tab" data-bs-toggle="pill" href="#v-pills-court-option" role="tab" aria-controls="v-pills-court-option" aria-selected="false">Court Option</a>
                                <a class="nav-link" id="v-pills-payment-type-tab" data-bs-toggle="pill" href="#v-pills-payment-type" role="tab" aria-controls="v-pills-payment-type" aria-selected="false">Payment Type</a>
                                <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false">Players</a>
                                <a class="nav-link" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy" aria-selected="false">Privacy</a>
                            </div>
                        </div>
                        <div class="col-9 ">
                            <div class="tab-content create-subscription" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-date" role="tabpanel" aria-labelledby="v-pills-date-tab">
                                    <DateRange />
                                </div>
                                <div class="tab-pane fade" id="v-pills-court-option" role="tabpanel" aria-labelledby="v-pills-court-option-tab">
                                    <CourtOption />
                                </div>
                                <div class="tab-pane fade" id="v-pills-payment-type" role="tabpanel" aria-labelledby="v-pills-payment-type-tab">
                                    <PaymentType />
                                </div>
                                <div class="tab-pane fade" id="v-pills-players" role="tabpanel" aria-labelledby="v-pills-players-tab">
                                    <Players/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                                    <Privacy/>
                                </div>
                            </div>
                            <div class="col-md-12 text-center">
                                <button class="btn btn-success btn-md w-25 py-2">Create</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSubscription
