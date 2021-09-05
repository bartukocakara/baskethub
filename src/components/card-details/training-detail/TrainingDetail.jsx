import React from 'react';
import "./_trainingDetail.scss";

import TrainingDetailNavs from './partials/TrainingDetailNavs';
import TrainingDetailActivities from './partials/TrainingDetailActivities';
import TrainingDetailTitle from './partials/TrainingDetailTitle';
import TrainingDetailProcessBar from './partials/TrainingDetailProcessBar';

const TrainingDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
                <TrainingDetailTitle />
                <TrainingDetailProcessBar />
                <div class="card-body">
                    <TrainingDetailNavs />
                    <TrainingDetailActivities />
                </div>
            </div>
        </div>
        </>
    )
}

export default TrainingDetail
