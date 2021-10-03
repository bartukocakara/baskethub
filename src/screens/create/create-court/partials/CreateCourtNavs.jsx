import { BsImages } from "@react-icons/all-files/bs/BsImages";
import { GiTennisCourt } from "@react-icons/all-files/gi/GiTennisCourt";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { GoCreditCard } from "@react-icons/all-files/go/GoCreditCard";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { MdCardMembership } from "@react-icons/all-files/md/MdCardMembership";

const CreateCourtNavs = () => {

    // add check icon since form fields fiiled correctly = AiFillCheckCircle
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-host-info-tab" data-bs-toggle="pill" href="#v-pills-host-info" role="tab" aria-controls="v-pills-host-info" aria-selected="true"> <GoPerson /> Host Info <AiFillCheckCircle size={20} /> </a>
                <a class="nav-link" id="v-pills-court-info-tab" data-bs-toggle="pill" href="#v-pills-court-info" role="tab" aria-controls="v-pills-court-info" aria-selected="false"> <GiTennisCourt /> Court Info</a>
                <a class="nav-link" id="v-pills-price-tab" data-bs-toggle="pill" href="#v-pills-price" role="tab" aria-controls="v-pills-price" aria-selected="false"> <GoCreditCard /> Price</a>
                <a class="nav-link" id="v-pills-subscription-tab" data-bs-toggle="pill" href="#v-pills-subscription" role="tab" aria-controls="v-pills-subscription" aria-selected="false"> <MdCardMembership />  Subscription</a>
                <a class="nav-link" id="v-pills-images-tab" data-bs-toggle="pill" href="#v-pills-images" role="tab" aria-controls="v-pills-images" aria-selected="false"> <BsImages /> Images</a>
            </div>
        </div>
    )
}

export default CreateCourtNavs
