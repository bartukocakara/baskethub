import Teams from "./../tabs/Teams";
import Matches from './../tabs/Matches';
import LicenceInfo from './../tabs/LicenceInfo';
import PlayerDetailCalendar from "../tabs/PlayerDetailCalendar";
import Trainings from "../tabs/Trainings";
const PlayerDetailActivities = () => {
    return (
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="times-tab" data-bs-toggle="tab" href="#times" role="tab" aria-controls="times" aria-selected="true">Available Times <span className="badge bg-primary">15 H</span></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="matches-tab" data-bs-toggle="tab" href="#matches" role="tab" aria-controls="matches" aria-selected="false">Matches Played <span className="badge bg-primary">100</span></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams <span className="badge bg-primary">20</span> </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="licence-tab" data-bs-toggle="tab" href="#licence" role="tab" aria-controls="licence" aria-selected="false">Licence <span className="badge bg-primary">2</span></a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="trainings-tab" data-bs-toggle="tab" href="#trainings" role="tab" aria-controls="trainings" aria-selected="false">Trainings <span className="badge bg-primary">2</span></a>
                        </li>
                    </ul>
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
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default PlayerDetailActivities
