
import Activities from '../tabs/Activities';
import News from './../tabs/News';
import Players from './../tabs/Players'
import Prizes from './../tabs/Prizes'
const AllStarDetailActivities = () => {
    return (
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                <Activities/>
            </div>
            <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                <Players/>
            </div>
            <div class="tab-pane fade" id="prizes" role="tabpanel" aria-labelledby="prizes-tab">
                <Prizes/>
            </div>
            <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                <News/>
            </div>
        </div>
    )
}

export default AllStarDetailActivities
