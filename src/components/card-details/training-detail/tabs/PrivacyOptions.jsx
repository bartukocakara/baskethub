import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import MultiSelect from "react-multi-select-component";

const PrivacyOptions = () => {

    const [value, onChange] = useState([new Date(), new Date()]);

    const options = [
        { label: "Team 1", value: "grapes", },
        { label: "Team 2", value: "mango" },
        { label: "Oşbo Team", value: "strawberry", disabled: true },
        { label: "Saturday", value: "apple" },
        { label: "Sunday 🍊", value: "tangerine" },
      ];
      const [selected, setSelected] = useState([]);
    return (
        <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical">
                        <div class="form-body">
                        <div class="row">
                                <div class="col-6">
                                    <label htmlFor="">Pick Date Range</label>
                                <DateRangePicker
                                    className="d-block rounded"
                                    onChange={onChange}
                                    value={value}
                                />
                                </div>
                                <div className="col-md-6">
                                <label for="first-name-icon">Week Days</label>
                                    <MultiSelect
                                        options={options}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select" className="w-100 m-auto"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <div class="card-body text-center">
                                        <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked="true" />
                                        <label class="btn btn-outline-success m-2" for="success-outlined">Enable all requests</label>

                                        <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
                                        <label class="btn btn-outline-danger m-2" for="danger-outlined">Disable all requests</label>
                                    </div>
                                </div>
                                <div className="col-md-4 m-auto">
                                    <div class="card-body text-center">
                                    
                                        <div class="form-check form-switch m-3">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Disable match requests</label>
                                        </div>
                                        <div class="form-check form-switch m-3">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Disable team join requests</label>
                                        </div>
                                        <div class="form-check form-switch m-3">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                                            <label class="form-check-label" for="flexSwitchCheckDisabled">Disable message requests</label>
                                        </div>
                                        <div class="form-check form-switch m-3">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled="" />
                                            <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disable training requests</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PrivacyOptions
