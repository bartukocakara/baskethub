import { GiStrong } from "@react-icons/all-files/gi/GiStrong";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { GiTennisCourt } from "@react-icons/all-files/gi/GiTennisCourt";
import { GoCreditCard } from "@react-icons/all-files/go/GoCreditCard";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { IoMdFitness } from "@react-icons/all-files/io/IoMdFitness";

const CreateTrainingNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-date-tab" data-bs-toggle="pill" href="#v-pills-date" role="tab" aria-controls="v-date-home" aria-selected="true"> <FaCalendarAlt /> Date <AiFillCheckCircle /></a>
                <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false"> <GiTennisCourt /> Court</a>
                <a class="nav-link" id="v-pills-trainers-tab" data-bs-toggle="pill" href="#v-pills-trainers" role="tab" aria-controls="v-pills-trainers" aria-selected="false"> <GiStrong /> Trainer</a>
                <a class="nav-link" id="v-pills-training-items-tab" data-bs-toggle="pill" href="#v-pills-training-items" role="tab" aria-controls="v-pills-training-items" aria-selected="false"> <IoMdFitness /> Training Items</a>
                <a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false"> <GoCreditCard />Payment</a>
            </div>
        </div>
    )
}

export default CreateTrainingNavs
