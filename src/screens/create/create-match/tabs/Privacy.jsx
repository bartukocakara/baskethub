import React from 'react'

const Privacy = () => {
    return (
        <div class="card">
        <div class="card-body">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch
                    checkbox
                    input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
                    checkbox
                    input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled="" />
                <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch
                    checkbox
                    input</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked="" disabled="" />
                <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
                    checked switch
                    checkbox input</label>
            </div>
        </div>
    </div>
    )
}

export default Privacy
