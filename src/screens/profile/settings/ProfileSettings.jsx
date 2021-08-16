import React from 'react'
import Privacy from './settings-partials/Privacy'
import RequestPermissions from './settings-partials/RequestPermissions'
import { BsFillLockFill } from '@react-icons/all-files/bs/BsFillLockFill';
import { FaHandshake } from '@react-icons/all-files/fa/FaHandshake';

const ProfileSettings = () => {
    return (
        <div class="card">
            <h4 class="card-title">Profile Settings</h4>
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><BsFillLockFill /> Privacy</a>
                            <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><FaHandshake/> Request Permissions</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                               <Privacy />
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <RequestPermissions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
