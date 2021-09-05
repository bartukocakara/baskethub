import { IoMdFitness } from "@react-icons/all-files/io/IoMdFitness";
import { FiList } from "@react-icons/all-files/fi/FiList";
import { RiGitRepositoryPrivateLine } from "@react-icons/all-files/ri/RiGitRepositoryPrivateLine";
import { RiGalleryFill } from "@react-icons/all-files/ri/RiGalleryFill";
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { GiWhistle } from "@react-icons/all-files/gi/GiWhistle";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaHandPeace } from "@react-icons/all-files/fa/FaHandPeace";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
const TrainingDetailNavs = () => {
    return (
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="calendar-tab" data-bs-toggle="tab" href="#calendar" role="tab" aria-controls="calendar" aria-selected="true">Calendar <FaCalendarAlt className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="players-tab" data-bs-toggle="tab" href="#players" role="tab" aria-controls="players" aria-selected="true">Players <FaUsers className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="training-types-tab" data-bs-toggle="tab" href="#training-types" role="tab" aria-controls="training-types" aria-selected="false">Training Types <FiList className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="training-items-tab" data-bs-toggle="tab" href="#training-items" role="tab" aria-controls="training-items" aria-selected="false">Training Items <IoMdFitness className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="chat-tab" data-bs-toggle="tab" href="#chat" role="tab" aria-controls="chat" aria-selected="false">Chat <AiOutlineMail className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="news-tab" data-bs-toggle="tab" href="#news" role="tab" aria-controls="news" aria-selected="false">News <FaHandPeace className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="price-info-tab" data-bs-toggle="tab" href="#price-info" role="tab" aria-controls="price-info" aria-selected="false">Price Info <FaMoneyCheckAlt className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="gallery-tab" data-bs-toggle="tab" href="#gallery" role="tab" aria-controls="gallery" aria-selected="false">Court Gallery <RiGalleryFill className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="trainers-tab" data-bs-toggle="tab" href="#trainers" role="tab" aria-controls="trainers" aria-selected="false">Trainers <GiWhistle className="m-1"/></a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="privacy-options-tab" data-bs-toggle="tab" href="#privacy-options" role="tab" aria-controls="privacy-options" aria-selected="false">Privacy Options<RiGitRepositoryPrivateLine className="m-1"/></a>
            </li>
        </ul>
    )
}

export default TrainingDetailNavs
