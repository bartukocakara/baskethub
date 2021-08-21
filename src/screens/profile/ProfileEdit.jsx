import React from 'react'
import Address from './partials/profile-edit/Address'
import UserInfo from './partials/profile-edit/UserInfo'
import { GoLocation } from '@react-icons/all-files/go/GoLocation';
import { FaAddressCard } from '@react-icons/all-files/fa/FaAddressCard';
import { FaFileSignature } from '@react-icons/all-files/fa/FaFileSignature';
import Licence from './partials/profile-edit/Licence';


const ProfileEdit = () => {
    return (
        <>
        <div class="card">
            
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><FaAddressCard className="m-1"/>User Info</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><GoLocation className="m-1"/>Address</a>
                            <a class="nav-link" id="v-pills-licence-tab" data-bs-toggle="pill" href="#v-pills-licence" role="tab" aria-controls="v-pills-licence" aria-selected="false"><FaFileSignature className="m-1"/>Licence</a>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <UserInfo />
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <Address/>
                            </div>
                            <div class="tab-pane fade" id="v-pills-licence" role="tabpanel" aria-labelledby="v-pills-licence-tab">
                                <Licence/>
                            </div>
                        </div>
                        <div class="col-12 d-flex justify-content-end">
                            <div class="checkbox mt-2 m-3">
                                    <input type="checkbox" id="remember-me-v" class="form-check-input" checked="" />
                                    <label for="remember-me-v">Remember Me</label>
                                </div>
                            <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileEdit
