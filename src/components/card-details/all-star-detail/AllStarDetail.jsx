import React from 'react'
import AllStarDetailActivities from './partials/AllStarDetailActivities';
import AllStarDetailNavs from './partials/AllStarDetailNavs';
import AllStarDetailTop from './partials/AllStarDetailTop';

import "./_allStarDetail.scss";

const AllStarDetail = () => {
    return (
        <div>
            <h6 className="text-center">All Star Detail</h6>
            <div className="card">
                <AllStarDetailTop />
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <AllStarDetailNavs/>
                                <AllStarDetailActivities />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AllStarDetail
