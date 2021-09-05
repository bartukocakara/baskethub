
import EventCalendar from './../tabs/EventCalendar'
import News from './../tabs/News';
import Players from './../tabs/Players'
import Prizes from './../tabs/Prizes'
const AllStarDetailActivities = () => {
    return (
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="event-calendar" role="tabpanel" aria-labelledby="event-calendar-tab">
                <EventCalendar/>
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
