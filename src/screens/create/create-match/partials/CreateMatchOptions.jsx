
import React from 'react'

import NewMatchNavs from './new-match/partials/NewMatchNavs';
import NewMatchInputs from './new-match/partials/NewMatchInputs';
import CallAllFavPlayers from '../option-tabs/CallAllFavPlayers';
import CallAllFavTeams from '../option-tabs/CallAllFavTeams';
import PlayedMatches from '../option-tabs/PlayedMatches';
const CreateMatchOptions = () => {

    return (
        <>
        <div class="col-sm-12 col-md-9 mt-2">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade" id="v-pills-team" role="tabpanel" aria-labelledby="v-pills-team-tab">
                    <CallAllFavPlayers />
                </div>
                <div class="tab-pane fade" id="v-pills-player" role="tabpanel" aria-labelledby="v-pills-player-tab">
                    <CallAllFavTeams />
                </div>
                <div className="tab-pane fade" id="v-pills-played-matches" role="tabpanel" aria-labelledby="v-pills-played-matches-tab">
                    <PlayedMatches />
                </div>
                <div class="tab-pane fade active show" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div class="row">
                        <div class="col-auto d-flex m-auto">
                            <div class="form-check m-2">
                                <div class="checkbox mt-2">
                                    <input type="checkbox" class="form-check-input"/>
                                    <label for="remember-me-v " class="fw-bold">Save this option</label>
                                </div>
                            </div>
                            <div class="d-flex m-2">
                                <button type="submit" class="btn btn-success me-1 mb-1">Create Match</button>
                                <a href="/" class="btn btn-light-secondary me-1 mb-1" >Reset</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <NewMatchNavs />
                        <NewMatchInputs />
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateMatchOptions
