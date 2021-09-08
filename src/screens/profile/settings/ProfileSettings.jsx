import React from 'react'
import Privacy from './settings-tabs/Privacy'
import RequestPermissions from './settings-tabs/RequestPermissions'
import { BsFillLockFill } from '@react-icons/all-files/bs/BsFillLockFill';
import { MdEventAvailable } from '@react-icons/all-files/md/MdEventAvailable';

const ProfileSettings = () => {
    return (
        <div class="card">
            <h4 class="card-title">Profile Settings</h4>
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-privacy-home" role="tab" aria-controls="v-privacy-home" aria-selected="true"><BsFillLockFill /> Privacy</a>
                            <a class="nav-link" id="v-pills-request-permissions-tab" data-bs-toggle="pill" href="#v-pills-request-permissions" role="tab" aria-controls="v-pills-request-permissions" aria-selected="false"><MdEventAvailable className="m-1"/>Event Availability</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-privacy-home" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                               <Privacy />
                            </div>
                            <div class="tab-pane fade" id="v-pills-request-permissions" role="tabpanel" aria-labelledby="v-pills-request-permissions-tab">
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
