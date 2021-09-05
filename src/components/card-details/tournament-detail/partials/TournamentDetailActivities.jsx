import Schema from './../tabs/Schema';
import TournamentCalendar from './../tabs/Calendar';
import Rules from './../tabs/Rules';
import Referees from './../tabs/Referees';
import Teams from './../tabs/Teams';
import MyTeam from './../tabs/MyTeam';
import Prize from './../tabs/Prize';
import ParticipantGift from './../tabs/ParticipantGift';
import News from './../tabs/News';

const TournamentDetailActivities = () => {
    return (
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade" id="news" role="tabpanel" aria-labelledby="news-tab">
                <News/>
            </div>
            <div class="tab-pane fade" id="schema" role="tabpanel" aria-labelledby="schema-tab">
                <Schema />
            </div>
            <div class="tab-pane active show" id="calendar" role="tabpanel" aria-labelledby="calendar-tab">
                <TournamentCalendar />
            </div>
            <div class="tab-pane fade" id="rules" role="tabpanel" aria-labelledby="rules-tab">
                <Rules />
            </div>
            <div class="tab-pane fade" id="referees" role="tabpanel" aria-labelledby="referees-tab">
                <Referees />
            </div>
            <div class="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                <Teams/>
            </div>
            <div class="tab-pane fade" id="my-team" role="tabpanel" aria-labelledby="my-team-tab">
                <h6><MyTeam/></h6>
            </div>
            <div class="tab-pane fade" id="prizes" role="tabpanel" aria-labelledby="prizes-tab">
                <h6><Prize/></h6>
            </div>
            <div class="tab-pane fade" id="gifts" role="tabpanel" aria-labelledby="gifts-tab">
                <h6><ParticipantGift/></h6>
            </div>
            <div class="tab-pane fade" id="court-gallery" role="tabpanel" aria-labelledby="court-gallery-tab">

            </div>
        </div>
    )
}

export default TournamentDetailActivities
