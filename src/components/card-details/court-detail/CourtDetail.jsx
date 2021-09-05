import React from 'react'


import "./_courtDetail.scss";

import CourtDetailTop from './partials/CourtDetailTop';
import CourtDetailImages from './partials/CourtDetailImages';
import CourtDetailRating from './partials/CourtDetailRating';
import CourtHost from './partials/CourtHost';
import CourtDetailNavs from './partials/CourtDetailNavs';
import CourtDetailActivities from './partials/CourtDetailActivities';

const FavCourtDetail = () => {
    return (
        <>
        <div className="d-flex court-detail-header-text">
            <CourtDetailTop />
        </div>
        
            <CourtDetailImages />
            <CourtDetailRating />
            <CourtHost />
            
            <div classNames="col-12">
                <div className="card">
                    <div class="card-body">
                        <CourtDetailNavs />
                        <CourtDetailActivities />
                </div>
            </div>
        </div>
        </>
    )
}

export default FavCourtDetail
