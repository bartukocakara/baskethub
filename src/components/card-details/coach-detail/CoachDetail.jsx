

import "./_coachDetail.scss";
import CoachDetailTop from "./partials/CoachDetailTop";
import CoachDetailStatistics from "./partials/CoachDetailStatistics";
import CoachDetailActivities from "./partials/CoachDetailActivities";
import CoachDetailNavs from "./partials/CoachDetailNavs";

const CoachDetail = () => {
    return (
        <>
            <div class="col-12">
                <div className="row"> 
                    <CoachDetailTop />
                    <CoachDetailStatistics />
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                            <CoachDetailNavs />
                            <CoachDetailActivities /> 
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CoachDetail
