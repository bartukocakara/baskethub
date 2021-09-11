import Teams from "./../tabs/Teams";
import Matches from './../tabs/Matches';
import LicenceInfo from './../tabs/LicenceInfo';
import PlayerDetailCalendar from "../tabs/PlayerDetailCalendar";
import Trainings from "../tabs/Trainings";
import PlayerDetailNavs from "./PlayerDetailNavs";
import Managers from "../tabs/Managers";
const PlayerDetailActivities = () => {
    return (
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <PlayerDetailNavs />
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active col-10 m-auto" id="times" role="tabpanel" aria-labelledby="times-tab">
                            <PlayerDetailCalendar />
                        </div>
                        <div class="tab-pane fade mt-4" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                            <Matches />
                        </div>
                        <div class="tab-pane fade" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                            <LicenceInfo />
                        </div>
                        <div class="tab-pane fade mt-4" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                            <Teams />
                        </div>
                        <div class="tab-pane fade mt-4" id="trainings" role="tabpanel" aria-labelledby="trainings-tab">
                            <Trainings />
                        </div>
                        <div class="tab-pane fade mt-4" id="managers" role="tabpanel" aria-labelledby="managers-tab">
                            <Managers />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default PlayerDetailActivities
