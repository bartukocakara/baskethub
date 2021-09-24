import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";
import { AiFillGift } from "@react-icons/all-files/ai/AiFillGift";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";
import { BsFillLockFill } from "@react-icons/all-files/bs/BsFillLockFill";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { GiTennisCourt } from "@react-icons/all-files/gi/GiTennisCourt";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { GoCreditCard } from "@react-icons/all-files/go/GoCreditCard";

const CreateAllStarNavs = () => {
    return (
        <div class="col-2">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link m-1 active" id="v-pills-teams-tab" data-bs-toggle="pill" href="#v-pills-teams" role="tab" aria-controls="v-pills-teams" aria-selected="true"> <BsPeopleFill className="m-1" /> Teams</a>
                <a class="nav-link m-1" id="v-pills-players-tab" data-bs-toggle="pill" href="#v-pills-players" role="tab" aria-controls="v-pills-players" aria-selected="false"><GoPerson className="m-1" /> Players </a>
                <a class="nav-link m-1" id="v-pills-courts-tab" data-bs-toggle="pill" href="#v-pills-courts" role="tab" aria-controls="v-pills-courts" aria-selected="false"><GiTennisCourt  className="m-1" /> Courts</a>
                <a class="nav-link m-1" id="v-pills-dates-tab" data-bs-toggle="pill" href="#v-pills-dates" role="tab" aria-controls="v-pills-dates" aria-selected="false"><FaCalendarAlt className="m-1" />Dates</a>
                <a class="nav-link m-1" id="v-pills-events-tab" data-bs-toggle="pill" href="#v-pills-events" role="tab" aria-controls="v-pills-events" aria-selected="false"> <FaBasketballBall  className="m-1" /> Events  </a>
                <a class="nav-link m-1" id="v-pills-gifts-tab" data-bs-toggle="pill" href="#v-pills-gifts" role="tab" aria-controls="v-pills-gifts" aria-selected="false"> <AiFillGift className="m-1" /> Gifts  </a>
                <a class="nav-link m-1" id="v-pills-prizes-tab" data-bs-toggle="pill" href="#v-pills-prizes" role="tab" aria-controls="v-pills-prizes" aria-selected="false"> <GiTrophyCup  className="m-1" /> Prizes</a>
                <a class="nav-link m-1" id="v-pills-privacy-tab" data-bs-toggle="pill" href="#v-pills-privacy" role="tab" aria-controls="v-pills-privacy" aria-selected="false"> <BsFillLockFill className="m-1" /> Privacy</a>
                <a class="nav-link m-1" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false"> <GoCreditCard className="m-1" /> Payment</a>
            </div>
        </div>
    )
}

export default CreateAllStarNavs
