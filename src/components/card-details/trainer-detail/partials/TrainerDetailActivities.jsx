import Comments from '../tabs/Comments';
import TrainingTypes from '../tabs/TrainingTypes';
import Licences from '../tabs/Licences';
import TrainingCalendar from '../tabs/TrainingCalendar';
import Players from '../tabs/Players';
import Teams from '../tabs/Teams';
import Videos from '../tabs/Videos';

const TrainerDetailActivities = () => {
    return (
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <TrainingCalendar />
            </div>
            <div className="tab-pane fade mt-4" id="players" role="tabpanel" aria-labelledby="players-tab">
                <Players />
            </div>
            <div className="tab-pane fade mt-4" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                <Teams />
            </div>
            <div className="tab-pane fade mt-4" id="training-types" role="tabpanel" aria-labelledby="training-types-tab">
                <TrainingTypes />
            </div>
            <div className="tab-pane fade row mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <h1>LABEL</h1>
            </div>
            <div className="tab-pane fade row mt-4" id="licence" role="tabpanel" aria-labelledby="licence-tab">
                <Licences />
            </div>
            <div className="tab-pane fade row mt-4" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                <Comments />
            </div>
            <div className="tab-pane fade row mt-4" id="videos" role="tabpanel" aria-labelledby="videos-tab">
                <Videos />
            </div>
        </div>
    )
}

export default TrainerDetailActivities
