import React from 'react'
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';

import { Link } from 'react-router-dom';
import AllStarSettingNavs from './partials/AllStarSettingNavs';
import AllStarSettingInputs from './partials/AllStarSettingInputs';

const TeamSettings = () => {
    return (
        <div class="card">
            <div class="d-flex">
            <Link to="all-star-detail" className="m-2"><BiArrowBack/> Turn back</Link>
            <h4 class="card-title text-center mt-2" style={{ marginLeft:"30%" }}>All Star Settings</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <AllStarSettingNavs />
                    <AllStarSettingInputs />
                </div>
            </div>
        </div>
    )
}

export default TeamSettings
