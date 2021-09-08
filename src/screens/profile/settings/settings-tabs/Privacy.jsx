import React from 'react'

const Privacy = () => {
    return (
        <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical">
                        <div class="form-body">
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
                                <div class="col-12">
                                    <div class="form-check">
                                        <div class="checkbox mt-2">
                                            <input type="checkbox" id="remember-me-v" class="form-check-input" checked="" />
                                            <label for="remember-me-v">Remember Me</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
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

export default Privacy
