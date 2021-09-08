import React from 'react'
import CreateCourtInputs from './partials/CreateCourtInputs'
import CreateCourtNavs from './partials/CreateCourtNavs';
import "./_createCourt.scss";

const CreateCourt = () => {
    return (
        <div>
        <h6 class=" text-center screen-title">Create Court</h6>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <CreateCourtNavs />
                    <CreateCourtInputs />
                </div>
            </div>
        </div>
        </div>
    )
}

export default CreateCourt
