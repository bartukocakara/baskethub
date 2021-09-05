import CourtGallery from './../tabs/CourtGallery';
import News from './../tabs/News';
import TrainingCalendar from './../tabs/TrainingCalendar';
import PriceInfo from './../tabs/PriceInfo';
import Trainers from './../tabs/Trainers';
import PrivacyOptions from './../tabs/PrivacyOptions';
import Players from './../tabs/Players';
import TraininigTypes from './../tabs/TrainingTypes';
import TrainingItems from './../tabs/TrainingItems';
import Messages from './../tabs/Messages';
const TrainingDetailActivities = () => {
    return (
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                <TrainingCalendar />
            </div>
            <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                <Players/>
            </div>
            <div class="tab-pane fade" id="training-types" role="tabpanel" aria-labelledby="training-types-tab">
                <TraininigTypes/>
            </div>
            <div class="tab-pane fade" id="training-items" role="tabpanel" aria-labelledby="training-items-tab">
                <TrainingItems/>
            </div>
            <div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab">
                <Messages/>
            </div>
            <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                <News/>
            </div>
            <div class="tab-pane fade" id="price-info" role="tabpanel" aria-labelledby="price-info-tab">
                <PriceInfo />
            </div>
            <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab">
                <CourtGallery />
            </div>
            <div class="tab-pane fade" id="trainers" role="tabpanel" aria-labelledby="trainers-tab">
                <Trainers />
            </div>
            <div class="tab-pane fade" id="privacy-options" role="tabpanel" aria-labelledby="privacy-options-tab">
                <PrivacyOptions />
            </div>
        </div>
    )
}

export default TrainingDetailActivities
