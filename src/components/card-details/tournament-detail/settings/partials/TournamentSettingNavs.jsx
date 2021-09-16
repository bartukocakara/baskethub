
import { BsFillLockFill } from '@react-icons/all-files/bs/BsFillLockFill';
import { MdEventAvailable } from '@react-icons/all-files/md/MdEventAvailable';
import { GiTargetPrize } from '@react-icons/all-files/gi/GiTargetPrize';
import { AiFillGift } from '@react-icons/all-files/ai/AiFillGift';
 
const TeamSettingsNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-privacy" role="tab" aria-controls="v-privacy-home" aria-selected="true"><BsFillLockFill /> Privacy</a>
                <a class="nav-link" id="v-pills-request-permissions-tab" data-bs-toggle="pill" href="#v-pills-request-permissions" role="tab" aria-controls="v-pills-request-permissions" aria-selected="false"><MdEventAvailable className="m-1"/>Event Availability</a>
                <a class="nav-link" id="v-pills-prize-list-tab" data-bs-toggle="pill" href="#v-pills-prize-list" role="tab" aria-controls="v-pills-prize-list" aria-selected="false"><GiTargetPrize className="m-1"/>Prize List</a>
                <a class="nav-link" id="v-pills-participant-gift-tab" data-bs-toggle="pill" href="#v-pills-participant-gift" role="tab" aria-controls="v-pills-participant-gift" aria-selected="false"><AiFillGift className="m-1"/>Participant Gift List</a>
            </div>
        </div>
    )
}

export default TeamSettingsNavs
