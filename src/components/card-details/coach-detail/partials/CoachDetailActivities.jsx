import AvailableTimes from '../tabs/AvailableTimes';
import Comments from '../tabs/Comments';
import ManagedMatches from '../tabs/ManagedMatches';
import Teams from '../tabs/Teams';
import Licence from './../tabs/Licence';

const CoachDetailActivities = () => {
    return (
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active col-10 m-auto" id="available-times" role="tabpanel" aria-labelledby="available-times-tab">
                    <AvailableTimes />
                </div>
                <div class="tab-pane fade mt-4" id="matches-managed" role="tabpanel" aria-labelledby="matches-managed-tab">
                    <ManagedMatches />
                </div>
                <div class="tab-pane fade mt-4" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                    <Teams />
                </div>
                <div class="tab-pane fade" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                    <Licence/>
                </div>
                <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                    <Comments/>
                </div>
            </div>
    
    )
}

export default CoachDetailActivities
