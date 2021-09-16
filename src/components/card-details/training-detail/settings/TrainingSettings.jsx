import React from 'react'
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';

import { Link } from 'react-router-dom';
import TrainingSettingNavs from './partials/TrainingSettingNavs';
import TrainingSettingInputs from './partials/TrainingSettingInputs';

const TrainingSettings = () => {
    return (
        <div class="card">
            <div class="d-flex">
            <Link to="training-detail" className="m-2"><BiArrowBack/> Turn back</Link>
            <h4 class="card-title text-center mt-2" style={{ marginLeft:"30%" }}>Training Settings</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <TrainingSettingNavs />
                    <TrainingSettingInputs />
                </div>
            </div>
        </div>
    )
}

export default TrainingSettings
