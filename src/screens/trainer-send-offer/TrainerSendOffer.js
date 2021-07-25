import React from 'react'
import Monthly from './training-types/Monthly'
import Weekly from './training-types/Weekly'
import Yearly from './training-types/Yearly'

const TrainerSendOffer = () => {
    return (
        <>
        <h6>Trainer Send Offer</h6>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <section class="section">
                        <div class="card-body text-center">
                            <h4 class="card-title">Trainer Name</h4>
                            <div class="avatar avatar-xl me-3">
                                <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                            </div>
                        </div>
                    </section>
                    <div class="col-md-12 p-2">
                        <div class="row">
                            <div class="col-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="v-pills-weekly-tab" data-bs-toggle="pill" href="#v-pills-weekly" role="tab" aria-controls="v-pills-weekly" aria-selected="false">Weekly <span>300$</span></a>
                                    <a class="nav-link" id="v-pills-monthly-tab" data-bs-toggle="pill" href="#v-pills-monthly" role="tab" aria-controls="v-pills-monthly" aria-selected="true">Monthly <span>1500$</span></a>
                                    <a class="nav-link" id="v-pills-yearly-tab" data-bs-toggle="pill" href="#v-pills-yearly" role="tab" aria-controls="v-pills-yearly" aria-selected="false">Yearly <span>5000$</span></a>
                                </div>
                            </div>
                            <div class="col-9">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane active show" id="v-pills-weekly" role="tabpanel" aria-labelledby="v-pills-weekly-tab">
                                       <Weekly />
                                    </div>
                                    <div class="tab-pane fade " id="v-pills-monthly" role="tabpanel" aria-labelledby="v-pills-monthly-tab">
                                        <Monthly />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-yearly" role="tabpanel" aria-labelledby="v-pills-yearly-tab">
                                        <Yearly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TrainerSendOffer
