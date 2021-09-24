import Courts from './../tabs/Courts'
import Dates from './../tabs/Dates'
import Players from './../tabs/Players'
import Privacy from './../tabs/Privacy'
import Teams from './../tabs/Teams'
import EventList from './../tabs/EventList'
import Gifts from '../tabs/Gifts'
import Prizes from '../tabs/Prizes'
import Payment from '../tabs/Payment'

const CreateAllStarInputs = () => {
    return (
         <div class="col-10">
               <div class="tab-content" id="v-pills-tabContent">
                     <div class="tab-pane fade show active" id="v-pills-teams" role="tabpanel" aria-labelledby="v-pills-teams-tab">
                        <Teams/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-players" role="tabpanel" aria-labelledby="v-pills-players-tab">
                        <Players/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-courts" role="tabpanel" aria-labelledby="v-pills-courts-tab">
                        <Courts/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-dates" role="tabpanel" aria-labelledby="v-pills-dates-tab">
                        <Dates/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-events" role="tabpanel" aria-labelledby="v-pills-events-tab">
                        <EventList/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-gifts" role="tabpanel" aria-labelledby="v-pills-gifts-tab">
                        <Gifts/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-prizes" role="tabpanel" aria-labelledby="v-pills-prizes-tab">
                        <Prizes/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                        <Privacy/>
                     </div>
                     <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                        <Payment />
                     </div>
               </div>
        </div>
    )
}

export default CreateAllStarInputs
