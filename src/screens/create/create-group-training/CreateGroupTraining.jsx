import React from "react";
import "./_createTraining.scss";
import CreateTrainingNavs from "./partials/CreateTrainingNavs";
import CreateTrainingInputs from "./partials/CreateTrainingInputs";

const CreateGroupTraining = () => {
    return (
        <div>
            <h5 className="text-center">Create Group Training</h5>
            <div class="container card">

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <CreateTrainingNavs />
                            <CreateTrainingInputs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateGroupTraining
