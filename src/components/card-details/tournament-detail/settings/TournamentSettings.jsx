import React from 'react'
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';

import { Link } from 'react-router-dom';
import TournamentSettingNavs from './partials/TournamentSettingNavs';
import TournamentSettingInputs from './partials/TournamentSettingInputs';

const TournamentSetting = () => {
    return (
        <div className="card">
            <div className="d-flex">
                <Link to="tournament-detail" className="m-2"><BiArrowBack/> Turn back</Link>
                <h4 className="card-title text-center mt-2" style={{ marginLeft:"30%" }}>Tournament Settings</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <TournamentSettingNavs />
                    <TournamentSettingInputs />
                </div>
            </div>
        </div>
    )
}

export default TournamentSetting
