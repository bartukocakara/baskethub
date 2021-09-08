import { RiUserStarLine } from "@react-icons/all-files/ri/RiUserStarLine";
import { BsPeopleFill } from "@react-icons/all-files/bs/BsPeopleFill";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { AiTwotoneAppstore } from "@react-icons/all-files/ai/AiTwotoneAppstore";
const CreateMatchNavs = () => {
    return (
        <div class="col-sm-12 col-md-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link" id="v-pills-team-tab" data-bs-toggle="pill" href="#v-pills-team" role="tab" aria-controls="v-pills-team" aria-selected="false">Call all fav players <RiUserStarLine/></a>
                <a class="nav-link" id="v-pills-player-tab" data-bs-toggle="pill" href="#v-pills-player" role="tab" aria-controls="v-pills-player" aria-selected="false">Call all fav teams <BsPeopleFill /> <AiFillStar size={10}/></a>
                <a class="nav-link" id="v-pills-played-matches-tab" data-bs-toggle="pill" href="#v-pills-played-matches" role="tab" aria-controls="v-pills-played-matches" aria-selected="false">Call by played matches <AiTwotoneAppstore/></a>
                <a class="nav-link active" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="true">Create without option +</a>
            </div>
        </div>
    )
}

export default CreateMatchNavs
