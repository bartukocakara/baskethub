import Name from '../new-match-tabs/Name';
import Payment from '../new-match-tabs/Payment';
import Date from '../new-match-tabs/Date';
import CourtUsage from '../new-match-tabs/CourtUsage';
import Coupon from '../new-match-tabs/Coupon';
import Players from '../new-match-tabs/Players';
import Teams from '../new-match-tabs/Teams';
import Prizes from '../new-match-tabs/Prizes';
import Notes from '../new-match-tabs/Notes';
import Courts from '../new-match-tabs/Courts';
import Settings from '../new-match-tabs/Settings';

const NewMatchInputs = () => {
    return (
        <div class="tab-content create-match" id="myTabContent">
                    
            <div class="tab-pane fade show active" id="name" role="tabpanel" aria-labelledby="name-tab">
                <Name />
            </div> 
            <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
               <Payment />
            </div>
            <div class="tab-pane fade" id="date" role="tabpanel" aria-labelledby="date-tab">
                <Date />
            </div>
            <div class="tab-pane fade" id="court-usage" role="tabpanel" aria-labelledby="court-usage-tab">
                <CourtUsage />
            </div>
            <div class="tab-pane fade" id="coupon" role="tabpanel" aria-labelledby="coupon-tab">
                <Coupon />
            </div> 
            <div class="tab-pane fade" id="players" role="tabpanel" aria-labelledby="players-tab">
                <Players />
            </div> 
            <div class="tab-pane fade" id="teams" role="tabpanel" aria-labelledby="teams-tab">
                <Teams />  
            </div>
            <div class="tab-pane fade" id="courts" role="tabpanel" aria-labelledby="courts-tab">
                <Courts />
            </div>
            <div class="tab-pane fade" id="prizes" role="tabpanel" aria-labelledby="prizes-tab">
                <Prizes />
            </div>
            <div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                <Notes />
            </div>
            <div class="tab-pane fade" id="privacy" role="tabpanel" aria-labelledby="privacy-tab">
                <Settings />
            </div>
        </div>
    )
}

export default NewMatchInputs
