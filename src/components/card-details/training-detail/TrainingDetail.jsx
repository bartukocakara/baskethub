import React from 'react';
import "./_trainingDetail.scss";

import TrainingDetailNavs from './partials/TrainingDetailNavs';
import TrainingDetailActivities from './partials/TrainingDetailActivities';
import TrainingDetailPartialsTop from './partials/TrainingDetailPartialsTop';

const TrainingDetail = () => {
    return (
        <>
        <div class="col-md-12">
            <div class="card">
                <TrainingDetailPartialsTop />
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
