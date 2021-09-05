import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaBook } from "@react-icons/all-files/fa/FaBook";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { AiFillGift } from "@react-icons/all-files/ai/AiFillGift";
import { GiTargetPrize } from "@react-icons/all-files/gi/GiTargetPrize";
import { GoListOrdered } from "@react-icons/all-files/go/GoListOrdered";
import { AiOutlineApartment } from "@react-icons/all-files/ai/AiOutlineApartment";
import { AiFillAppstore } from "@react-icons/all-files/ai/AiFillAppstore";
import { FaHandPeace } from "@react-icons/all-files/fa/FaHandPeace";

const TournamentDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Calendar<FaCalendarAlt className="m-1"/> </a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="schema-tab" data-bs-toggle="tab" href="#schema" role="tab" aria-controls="schema" aria-selected="false">Schema<AiOutlineApartment className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">News<FaHandPeace className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="rules-tab" data-bs-toggle="tab" href="#rules" role="tab" aria-controls="rules" aria-selected="false">Rules<FaBook className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="referees-tab" data-bs-toggle="tab" href="#referees" role="tab" aria-controls="referees" aria-selected="false">Referees <GiWhistle className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="teams-tab" data-bs-toggle="tab" href="#teams" role="tab" aria-controls="teams" aria-selected="false">Teams<AiFillAppstore className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="my-team-tab" data-bs-toggle="tab" href="#my-team" role="tab" aria-controls="my-team" aria-selected="false">My Team<GoListOrdered className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="prizes-tab" data-bs-toggle="tab" href="#prizes" role="tab" aria-controls="prizes" aria-selected="false">Prize<GiTargetPrize className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="gifts-tab" data-bs-toggle="tab" href="#gifts" role="tab" aria-controls="gifts" aria-selected="false">Participant Gift<AiFillGift className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="court-gallery-tab" data-bs-toggle="tab" href="#court-gallery" role="tab" aria-controls="court-gallery" aria-selected="false">Court Gallery<AiFillGift className="m-1"/></a>
            </li>
            
        </ul>
    )
}

export default TournamentDetailNavs
