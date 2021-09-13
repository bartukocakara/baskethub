import RequestList from './../tabs/request-list/RequestList';
import Matches from './../tabs/matches/Matches';
import MatchOptions from './../tabs/match-options/MatchOptions';
import Licence from './../tabs/licence/Licence';

import TrainingVideos from '../tabs/training-videos/TrainingVideos';
import Managers from '../tabs/managers/Managers';
import Trainers from '../tabs/trainers/Trainers';
import ProfileCalendar from '../tabs/calendar/ProfileCalendar';

const ProfileActivities = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active p-3" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                <ProfileCalendar />
            </div>
            <div className="tab-pane fade p-3" id="matches" role="tabpanel" aria-labelledby="matches-tab">
                <Matches />
            </div>
            <div className="tab-pane fade" id="requests" role="tabpanel" aria-labelledby="requests-tab">
                <RequestList />
            </div>
            <div className="tab-pane fade" id="matchOptions" role="tabpanel" aria-labelledby="matchOptions-tab">
                <MatchOptions />
            </div>
            <div className="tab-pane fade" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                <Licence />
            </div>
            <div className="tab-pane fade" id="training-videos" role="tabpanel" aria-labelledby="training-videos-tab">
                <TrainingVideos />
            </div>
            <div className="tab-pane fade" id="managers" role="tabpanel" aria-labelledby="managers-tab">
                <Managers />
            </div>
            <div className="tab-pane fade" id="trainers" role="tabpanel" aria-labelledby="trainers-tab">
                <Trainers />
            </div>
        </div>
    )
}

export default ProfileActivities
