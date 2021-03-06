import React from 'react'
import CreateTournamentInputs from './partials/CreateTournamentInputs'
import CreateTournamentNavs from './partials/CreateTournamentNavs'

const CreateTournament = () => {
    return (
        <>
        <h6 class="text-center screen-title">Create Tournament</h6>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <CreateTournamentNavs />
                    <CreateTournamentInputs />
                    <div class="col-md-12 text-center">
                        <button class="btn btn-success btn-md w-25 py-2">Create</button>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateTournament
