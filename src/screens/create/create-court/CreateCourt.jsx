import React from 'react'
import CourtInfo from './tabs/CourtInfo'
import HostInfo from './tabs/HostInfo'
import Images from './tabs/Images'
import Price from './tabs/Price'
import Subscription from './tabs/Subscription'

const CreateCourt = () => {
    return (
        <div>
        <h6 class=" text-center screen-title">Create Court</h6>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-host-info-tab" data-bs-toggle="pill" href="#v-pills-host-info" role="tab" aria-controls="v-pills-host-info" aria-selected="true">Host Info</a>
                            <a class="nav-link" id="v-pills-court-info-tab" data-bs-toggle="pill" href="#v-pills-court-info" role="tab" aria-controls="v-pills-court-info" aria-selected="false">Court Info</a>
                            <a class="nav-link" id="v-pills-price-tab" data-bs-toggle="pill" href="#v-pills-price" role="tab" aria-controls="v-pills-price" aria-selected="false">Price</a>
                            <a class="nav-link" id="v-pills-subscription-tab" data-bs-toggle="pill" href="#v-pills-subscription" role="tab" aria-controls="v-pills-subscription" aria-selected="false">Subscription</a>
                            <a class="nav-link" id="v-pills-images-tab" data-bs-toggle="pill" href="#v-pills-images" role="tab" aria-controls="v-pills-images" aria-selected="false">Images</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-host-info" role="tabpanel" aria-labelledby="v-pills-host-info-tab">
                               <HostInfo />
                            </div>
                            <div class="tab-pane fade" id="v-pills-court-info" role="tabpanel" aria-labelledby="v-pills-court-info-tab">
                                <CourtInfo/>
                            </div>
                            <div class="tab-pane fade" id="v-pills-price" role="tabpanel" aria-labelledby="v-pills-price-tab">
                                <Price/>
                            </div>
                            <div class="tab-pane fade" id="v-pills-subscription" role="tabpanel" aria-labelledby="v-pills-subscription-tab">
                                <Subscription/>
                            </div>
                            <div class="tab-pane fade" id="v-pills-images" role="tabpanel" aria-labelledby="v-pills-images-tab">
                                <Images/>
                            </div>
                        </div>
                        <div className="form-group col-md-12 p-2 text-center p-4">
                            <input type="button" className="btn btn-primary btn-lg w-25 fw-bold" id="helpInputTop" value="Create" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateCourt
