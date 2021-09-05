import Comments from '../tabs/Comments';
import ContractedPlayers from '../tabs/ContractedPlayers';
import ContractedTeams from '../tabs/ContractedTeams';
import MeetingCalendar from '../tabs/MeetingCalendar';
import Licences from '../tabs/Licences';

const ManagerDetailActivities = () => {
    return (
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active col-10 m-auto" id="meeting-calendar" role="tabpanel" aria-labelledby="meeting-calendar-tab">
                    <MeetingCalendar />
                </div>
                <div class="tab-pane fade mt-4" id="contracted-teams" role="tabpanel" aria-labelledby="contracted-teams-tab">
                    <ContractedTeams />
                </div>
                <div class="tab-pane fade mt-4" id="contracted-players" role="tabpanel" aria-labelledby="contracted-players-tab">
                    <ContractedPlayers />
                </div>
                <div class="tab-pane fade" id="licences" role="tabpanel" aria-labelledby="licences-tab">
                    <Licences/>
                </div>
                <div class="tab-pane fade row mt-4" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                    <Comments />
                </div>
            </div>
    )
}

export default ManagerDetailActivities
