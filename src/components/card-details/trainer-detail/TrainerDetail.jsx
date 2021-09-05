import React from 'react'


import "./_trainerDetail.scss";
import TrainerDetailTop from './partials/TrainerDetailTop';
import TrainerDetailStatistics from './partials/TrainerDetailStatistics';
import TrainerDetailNavs from './partials/TrainerDetailNavs';
import TrainerDetailActivities from './partials/TrainerDetailActivities';

const TrainerDetail = () => {
    return (
        <>
            <div class="col-12">
                <div className="row"> 
                    <TrainerDetailTop />
                    <TrainerDetailStatistics />
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <TrainerDetailNavs />
                            <TrainerDetailActivities />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default TrainerDetail
