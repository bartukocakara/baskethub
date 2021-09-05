import Comments from "../tabs/Comments";
import Qualifications from "../tabs/Qualifications";
import ReservationCalendar from "../tabs/ReservationCalendar";

const CourtDetailActivities = () => {
    return (
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <ReservationCalendar />
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <Comments />
            </div>
            <div class="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="properties-tab">
                <Qualifications />
            </div>
        </div>
    )
}

export default CourtDetailActivities