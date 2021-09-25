import React from 'react'

import Payment from "./../tabs/Payment";
import Courts from "./../tabs/Courts";
import Date from "./../tabs/Date";
import Players from "./../tabs/Players";
import Trainers from "./../tabs/Trainers";
import TrainingItems from '../tabs/TrainingItems';
import TrainingTeams from '../tabs/TrainingTeams';

const CreateTrainingInputs = () => {
    return (
        <div class="col-9">
            <form>
            <div class="tab-content create-training" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-date" role="tabpanel" aria-labelledby="v-pills-date-tab">
                   <Date/>
                </div>
                <div class="tab-pane fade" id="v-pills-players" role="tabpanel" aria-labelledby="v-pills-players-tab">
                    <Players />
                </div>
                <div class="tab-pane fade" id="v-pills-training-teams" role="tabpanel" aria-labelledby="v-pills-training-teams-tab">
                    <TrainingTeams />
                </div>
                <div class="tab-pane fade" id="v-pills-courts" role="tabpanel" aria-labelledby="v-pills-courts-tab">
                    <Courts />
                </div>
                <div class="tab-pane fade" id="v-pills-trainers" role="tabpanel" aria-labelledby="v-pills-trainers-tab">
                   <Trainers />
                </div>
                <div class="tab-pane fade" id="v-pills-training-items" role="tabpanel" aria-labelledby="v-pills-training-items-tab">
                    <TrainingItems />
                    </div>
                <div class="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                   <Payment />
                </div>
            </div>
            <div className="col-md-12 text-center">
                <button className="btn btn-success btn-md w-25">Create</button>
            </div>
            </form>
        </div>
    )
}

export default CreateTrainingInputs
