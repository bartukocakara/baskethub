import React from 'react'

const Privacy = () => {
    return (
        <div class="card p-0">
            <form class="form form-vertical p-0">
                    <div class="row">
                    <div className="col-md-6">
                        <div class="card-body">                                    
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
                            <button type="submit" class="btn btn-success me-1 mb-1">Submit</button>
                            <button type="reset" class="btn btn-light-secondary me-1 mb-1">Reset</button>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default Privacy
