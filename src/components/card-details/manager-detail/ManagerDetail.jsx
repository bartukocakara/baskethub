import React from 'react'
import "./_managerDetail.scss";
import Licence from './tabs/Licence';

const ManagerDetail = () => {
    return (
        <>
            <div class="col-12 col-lg-9">
                <div class="row">
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon purple">
                                            <i class="iconly-boldShow"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Profile Views</h6>
                                        <h6 class="font-extrabold mb-0">112.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon blue">
                                            <i class="iconly-boldProfile"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Followers</h6>
                                        <h6 class="font-extrabold mb-0">183.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon green">
                                            <i class="iconly-boldAdd-User"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Following</h6>
                                        <h6 class="font-extrabold mb-0">80.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon red">
                                            <i class="iconly-boldBookmark"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Saved Post</h6>
                                        <h6 class="font-extrabold mb-0">112</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Available Times</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Matches Played</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Teams</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licence</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nulla ut nulla
                                        neque. Ut hendrerit nulla a euismod pretium.
                                        Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis
                                        fringilla. Sed id
                                        tincidunt orci, et volutpat ligula.
                                        Aliquam sollicitudin sagittis ex, a rhoncus nisl feugiat quis. Lorem
                                        ipsum dolor sit
                                        amet, consectetur adipiscing elit.
                                        Nunc ultricies ligula a tempor vulputate. Suspendisse pretium mollis
                                        ultrices.</p>
                                </div>
                                <div class="tab-pane fade mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <h1>LABEL</h1>
                                </div>
                                <div class="tab-pane fade row mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <h1>LABEL</h1>
                                </div>
                                <div class="tab-pane fade row mt-4" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                                    <Licence />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                </div>
        </>
    )
}

export default ManagerDetail
