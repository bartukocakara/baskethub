import RequestList from './../tabs/request-list/RequestList';
import Matches from './../tabs/matches/Matches';
import MatchOptions from './../tabs/match-options/MatchOptions';
import Licence from './../tabs/licence/Licence';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import TrainingVideos from '../tabs/training-videos/TrainingVideos';
const ProfileActivities = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active col-10 m-auto" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                />
            </div>
            <div className="tab-pane fade col-11 m-auto" id="matches" role="tabpanel" aria-labelledby="matches-tab">
            {
                        [...Array(5)].map((matchesList) => (
                            <>
                                <Matches />
                            </>
                        ))
                    }
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
        </div>
    )
}

export default ProfileActivities
