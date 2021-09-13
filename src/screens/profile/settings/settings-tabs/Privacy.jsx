import React from 'react'

const Privacy = () => {
    return (
        <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <form class="form form-vertical">
                        <div class="form-body">
                            <div class="row">
                            <div className="col-md-6 p-0">
                                <div class="card-body p-0">                                    
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
                            <div className="col-md-6 p-0">
                                <div class="card-body p-0">                                    
                                    <div class="form-check form-switch m-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Show avatar </label>
                                    </div>
                                    <div class="form-check form-switch m-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Show email address</label>
                                    </div>
                                    <div class="form-check form-switch m-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                                        <label class="form-check-label" for="flexSwitchCheckDisabled">Show phone number</label>
                                    </div>
                                    <div class="form-check form-switch m-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled="" />
                                        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Show tabs</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <div class="checkbox mt-2">
                                        <input type="checkbox" id="remember-me-v" class="form-check-input" />
                                        <label for="remember-me-v">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button type="reset" class="btn btn-lg btn-success m-1">Save</button>
                                <button type="reset" class="btn btn-lg btn-light-secondary m-1">Reset</button>
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
