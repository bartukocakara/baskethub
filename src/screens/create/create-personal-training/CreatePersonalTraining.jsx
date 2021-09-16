import React from "react";
import CreateTrainingInputs from "./partials/CreateTrainingInputs";
import CreateTrainingNavs from "./partials/CreateTrainingNavs";
import "./_createTraining.scss";

const CreatePersonalTraining = () => {
    return (
        <div>
            <h5 className="text-center">Create Personal Training</h5>
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

export default CreatePersonalTraining
