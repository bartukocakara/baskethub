const Settings = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-body">
                    <form className="form form-vertical">
                        <div className="form-body">
                            <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="card-body p-0">                                    
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Disable match requests</label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                        <label className="form-check-label" for="flexSwitchCheckChecked">Disable team join requests</label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                                        <label className="form-check-label" for="flexSwitchCheckDisabled">Disable message requests</label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled="" />
                                        <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Disable training requests</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="card-body p-0">                                    
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Show avatar </label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                        <label className="form-check-label" for="flexSwitchCheckChecked">Show email address</label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                                        <label className="form-check-label" for="flexSwitchCheckDisabled">Show phone number</label>
                                    </div>
                                    <div className="form-check form-switch m-3">
                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled="" />
                                        <label className="form-check-label" for="flexSwitchCheckCheckedDisabled">Show tabs</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <div className="checkbox mt-2">
                                        <input type="checkbox" id="remember-me-v" className="form-check-input" />
                                        <label for="remember-me-v">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button type="reset" className="btn btn-lg btn-success m-1">Save</button>
                                <button type="reset" className="btn btn-lg btn-light-secondary m-1">Reset</button>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings
