
import Privacy from './../settings-tabs/Privacy'
import RequestPermissions from './../settings-tabs/RequestPermissions'
const TeamSettingInputs = () => {
    return (
        <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-privacy-home" role="tabpanel" aria-labelledby="v-pills-privacy-tab">
                    <Privacy />
                </div>
                <div class="tab-pane fade" id="v-pills-request-permissions" role="tabpanel" aria-labelledby="v-pills-request-permissions-tab">
                    <RequestPermissions />
                </div>
            </div>
        </div>
    )
}

export default TeamSettingInputs
