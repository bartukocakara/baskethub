import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Courts from "./Courts";
import Players from "./Players";
import Trainers from "./Trainers";
import "./_createTraining.scss";

const CreateTraining = () => {

    const options = [
        { label: "Monday", value: "grapes" },
        { label: "Tuesday", value: "mango" },
        { label: "Wednesday", value: "strawberry", disabled: true },
        { label: "Thursday", value: "watermelon" },
        { label: "Friday", value: "pear" },
        { label: "Saturday", value: "apple" },
        { label: "Sunday 🍊", value: "tangerine" },
      ];
    const [selected, setSelected] = useState([]);

    return (
        <div>
            <h5 className="text-center">Create training</h5>
            <div class="container card">

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-3">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Date</a>
                                    <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Players</a>
                                    <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Court</a>
                                    <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Trainer</a>
                                </div>
                            </div>
                            <div class="col-9">
                                <form>
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="row">
                                            <div className="col-md-9 m-auto mb-4">
                                                <h6 className="text-center">Please pick days</h6>
                                                <MultiSelect
                                                    options={options}
                                                    value={selected}
                                                    onChange={setSelected}
                                                    labelledBy="Select"
                                                />
                                            </div>
                                            <div className="col-md-6 p-3">
                                                <h6 className="text-center">Date Between</h6>
                                                <div className="form-group">
                                                    <h6>Select Start Date</h6>
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <h6>Select End Date</h6>
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 m-auto p-3">
                                                <h6 className="text-center">Hour Between</h6>
                                                <div className="form-group">
                                                    <h6 >Beginning Hour</h6>
                                                    <input type="time" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <h6 >Ending Hour</h6>
                                                    <input type="time" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <Players />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <Courts />
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                       <Trainers />
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTraining
