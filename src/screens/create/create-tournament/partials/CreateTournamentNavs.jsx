import { AiFillGift } from "@react-icons/all-files/ai/AiFillGift";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";
import { BsFillLockFill } from "@react-icons/all-files/bs/BsFillLockFill";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { GiTennisCourt } from "@react-icons/all-files/gi/GiTennisCourt";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { GoCreditCard } from "@react-icons/all-files/go/GoCreditCard";
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaBook } from "@react-icons/all-files/fa/FaBook";

const CreateTournamentNavs = () => {
    return (
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link active" id="v-pills-teams-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="true"> <BsPeopleFill /> Teams <AiFillCheckCircle /></a>
                <a class="nav-link" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false"> <GiTennisCourt />Courts</a>
                <a class="nav-link" id="v-pills-dates-tab" data-bs-toggle="pill" href="#v-pills-dates" role="tab" aria-controls="v-pills-dates" aria-selected="false"> <FaCalendarAlt /> Dates</a>
                <a class="nav-link" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false"> <GoPerson /> Players</a>
                <a class="nav-link" id="v-pills-rules-tab" data-bs-toggle="pill" href="#v-pills-rules" role="tab" aria-controls="v-pills-rules" aria-selected="false"> <FaBook /> Rules</a>
                <a class="nav-link" id="v-pills-gifts-tab" data-bs-toggle="pill" href="#v-pills-gifts" role="tab" aria-controls="v-pills-gifts" aria-selected="false"> <AiFillGift /> Gifts</a>
                <a class="nav-link" id="v-pills-prizes-tab" data-bs-toggle="pill" href="#v-pills-prizes" role="tab" aria-controls="v-pills-prizes" aria-selected="false"> <GiTrophyCup /> Prizes</a>
                <a class="nav-link" id="v-pills-referees-tab" data-bs-toggle="pill" href="#v-pills-referees" role="tab" aria-controls="v-pills-referees" aria-selected="false"><GiWhistle /> Referees</a>
                <a class="nav-link" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy" aria-selected="false"> <BsFillLockFill /> Privacy </a>
                <a class="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false"> <GoCreditCard />Payment</a>
            </div>
        </div>
    )
}

export default CreateTournamentNavs
