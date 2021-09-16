
import { BsFillLockFill } from '@react-icons/all-files/bs/BsFillLockFill';
import { MdEventAvailable } from '@react-icons/all-files/md/MdEventAvailable';

const TeamSettingsNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-privacy-home" role="tab" aria-controls="v-privacy-home" aria-selected="true"><BsFillLockFill /> Privacy</a>
                <a class="nav-link" id="v-pills-request-permissions-tab" data-bs-toggle="pill" href="#v-pills-request-permissions" role="tab" aria-controls="v-pills-request-permissions" aria-selected="false"><MdEventAvailable className="m-1"/>Event Availability</a>
            </div>
        </div>
    )
}

export default TeamSettingsNavs
