import React from 'react'
import "./_profile.scss";

import ProfileTop from './partials/ProfileTop';
import ProfileNavs from './partials/ProfileNavs';
import ProfileStatistics from './partials/ProfileStatistics';
import ProfileActivities from './partials/ProfileActivities';

const Profile = () => {
    return (
        <div className="col-12 col-lg-12">
            <div className="row">
                <ProfileTop />
                <ProfileStatistics />
                <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <ProfileNavs />
                        <ProfileActivities />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
