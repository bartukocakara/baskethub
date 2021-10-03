import React from 'react'
import CreateAllStarInputs from './partials/CreateAllStarInputs'
import CreateAllStarNavs from './partials/CreateAllStarNavs'

const CreateTournament = () => {
    return (
        <>
        <h6 class="text-center screen-title">Create All Star</h6>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <CreateAllStarNavs />
                    <CreateAllStarInputs />
                    <div class="col-md-12 text-center">
                        <button class="btn btn-success btn-md w-25 py-2" disabled>Create</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateTournament
