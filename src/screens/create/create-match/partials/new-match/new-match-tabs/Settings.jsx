import React from 'react'

const Settings = () => {
    return (
        <div class="card">
            <div className="col-md-12">
                <div class="card-body text-center">
                    <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked="true" />
                    <label class="btn btn-outline-success m-2" for="success-outlined">Enable all requests</label>
                    <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
                    <label class="btn btn-outline-danger m-2" for="danger-outlined">Disable all requests</label>
                </div>
            </div>
            <div className="col-md-6 m-auto">
                <div class="card-body text-center">

                    <div class="form-check form-switch m-3">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Disable match requests</label>
                    </div>
                    <div class="form-check form-switch m-3">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                        <label class="form-check-label" for="flexSwitchCheckDisabled">Disable message requests</label>
                    </div>
                    <div class="form-group d-flex">
                        <label class="form-check-label m-auto w-50">Max player</label>
                        <input class="form-control m-auto" type="number" />
                    </div>
                    <div class="form-group d-flex">
                        <label class="form-check-label m-auto w-50">Min player</label>
                        <input class="form-control m-auto" type="number" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
