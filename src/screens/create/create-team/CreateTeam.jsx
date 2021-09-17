import React from 'react'
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";
import CreateTeamSearch from './partials/CreateTeamSearch';
import CreateTeamInputs from './partials/CreateTeamInputs';
import CreateTeamPlayerList from './partials/CreateTeamPlayerList';
const CreateTeam = () => {
    return (
        <div>
            <h5 className="text-center screen-title">Create Team</h5>
            <div className="card">
                <div className="card-body">
                    <h6 className="text-center">Fiil the blanks <BsPencilSquare /></h6>
                    <div className="row">
                        <CreateTeamInputs />
                        <div className="col-md-12 row m-2 p-2">
                            <CreateTeamSearch />
                            <CreateTeamPlayerList />
                        </div>
                        <div className="col-md-12 row m-2 p-2">
                            <button className="btn btn-success w-25 fw-bold m-auto">Create</button>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default CreateTeam
