import React from 'react'
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';

import { Link } from 'react-router-dom';
import TeamSettingsNavs from './partials/TeamSettingsNavs';
import TeamSettingInputs from './partials/TeamSettingInputs';

const TeamSettings = () => {
    return (
        <div class="card">
            <div class="d-flex">
            <Link to="team-detail" className="m-2"><BiArrowBack/> Takım detayına dön</Link>
            <h4 class="card-title text-center mt-2" style={{ marginLeft:"30%" }}>Profile Settings</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <TeamSettingsNavs />
                    <TeamSettingInputs />
                </div>
            </div>
        </div>
    )
}

export default TeamSettings
