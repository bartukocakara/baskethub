import React from 'react'
import Courts from './tabs/Courts'
import Dates from './tabs/Dates'
import Players from './tabs/Players'
import Privacy from './tabs/Privacy'
import Teams from './tabs/Teams'

const CreateTournament = () => {
    return (
        <>
        <h6 class="text-center screen-title">Create Tournament</h6>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-teams-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="true">Teams</a>
                            <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false">Courts</a>
                            <a class="nav-link" id="v-pills-dates-tab" data-bs-toggle="pill" href="#v-pills-dates" role="tab" aria-controls="v-pills-dates" aria-selected="false">Dates</a>
                            <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false">Players</a>
                            <a class="nav-link" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy" aria-selected="false">Privacy</a>
                        </div>
                    </div>
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
                            <div class="tab-pane fade" id="v-pills-privacy" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                               <Privacy/>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <button class="btn btn-success btn-md w-25 py-2">Create</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateTournament
