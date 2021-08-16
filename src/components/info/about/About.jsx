import React from 'react'
import { AiFillQuestionCircle } from "@react-icons/all-files/ai/AiFillQuestionCircle";
import Address from './tabs/Address';
import Maps from './tabs/Maps';
import OurTeam from './tabs/OurTeam';
import Vision from './tabs/Vision';
import Mission from './tabs/Mission';

const About = () => {
    return (
        <div class="col-md-12">
            <div class="card">
                <div class="">
                    <h6 class="m-0 p-0 text-center">About Us <AiFillQuestionCircle className="text-info" size={25}/></h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a class="nav-link active" id="v-pills-address-tab" data-bs-toggle="pill" href="#v-pills-address" role="tab" aria-controls="v-pills-address" aria-selected="false">Address</a>
                                <a class="nav-link" id="v-pills-maps-tab" data-bs-toggle="pill" href="#v-pills-maps" role="tab" aria-controls="v-pills-maps" aria-selected="false">Map</a>
                                <a class="nav-link" id="v-pills-our-team-tab" data-bs-toggle="pill" href="#v-pills-our-team" role="tab" aria-controls="v-pills-our-team" aria-selected="false">Our Team</a>
                                <a class="nav-link" id="v-pills-vision-tab" data-bs-toggle="pill" href="#v-pills-vision" role="tab" aria-controls="v-pills-vision" aria-selected="false">Vision</a>
                                <a class="nav-link" id="v-pills-mission-tab" data-bs-toggle="pill" href="#v-pills-mission" role="tab" aria-controls="v-pills-mission" aria-selected="true">Mission</a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade  active show" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                                    <Address/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-maps" role="tabpanel" aria-labelledby="v-pills-maps-tab">
                                    <Maps />
                                </div>
                                <div class="tab-pane fade" id="v-pills-our-team" role="tabpanel" aria-labelledby="v-pills-our-team-tab">
                                    <OurTeam/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-vision" role="tabpanel" aria-labelledby="v-pills-vision-tab">
                                    <Vision/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-mission" role="tabpanel" aria-labelledby="v-pills-mission-tab">
                                    <Mission/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
