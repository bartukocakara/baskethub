import Gifts from './../tabs/ParticipantGifts'
import Prizes from '../tabs/Prizes'
import Rules from '../tabs/Rules'
import Courts from './../tabs/Courts'
import Dates from './../tabs/Dates'
import Players from './../tabs/Players'
import Privacy from './../tabs/Privacy'
import Teams from './../tabs/Teams'
import Referees from '../tabs/Referees'
import Payment from '../tabs/Payment'

const CreateTournamentInputs = () => {
    return (
        <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-teams" role="tabpanel" aria-labelledby="v-pills-teams-tab">
                   <Teams/>
                </div>
                <div class="tab-pane fade" id="v-pills-courts" role="tabpanel" aria-labelledby="v-pills-courts-tab">
                    <Courts/>
                </div>
                <div class="tab-pane fade" id="v-pills-dates" role="tabpanel" aria-labelledby="v-pills-dates-tab">
                   <Dates/>
                </div>
                <div class="tab-pane fade" id="v-pills-players" role="tabpanel" aria-labelledby="v-pills-players-tab">
                   <Players/>
                </div>
                <div class="tab-pane fade" id="v-pills-rules" role="tabpanel" aria-labelledby="v-pills-rules-tab">
                   <Rules/>
                </div>
                <div class="tab-pane fade" id="v-pills-gifts" role="tabpanel" aria-labelledby="v-pills-gifts-tab">
                   <Gifts/>
                </div>
                <div class="tab-pane fade" id="v-pills-prizes" role="tabpanel" aria-labelledby="v-pills-prizes-tab">
                   <Prizes/>
                </div>
                <div class="tab-pane fade" id="v-pills-referees" role="tabpanel" aria-labelledby="v-pills-referees-tab">
                    <Referees/>
                </div>
                <div class="tab-pane fade" id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                   <Privacy/>
                </div>
                <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                   <Payment/>
                </div>
            </div>
        </div>
    )
}

export default CreateTournamentInputs
