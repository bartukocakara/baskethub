import {
    Link
  } from "react-router-dom";
import { GiStrong } from "@react-icons/all-files/gi/GiStrong";
import { MdGroupAdd } from "@react-icons/all-files/md/MdGroupAdd";
import { GiTennisCourt } from "@react-icons/all-files/gi/GiTennisCourt";
import { ImTree } from "@react-icons/all-files/im/ImTree";
import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";
import { GiRainbowStar } from "@react-icons/all-files/gi/GiRainbowStar";

const Create = () => {
    return (
        <li className="nav-item dropdown me-1">
            <div class="dropdown m-3">
            <Link class="btn btn-primary fw-bold" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Create +
            </Link>
            <ul class="dropdown-menu mt-2 border" aria-labelledby="dropdownMenuLink">
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-team"><MdGroupAdd size={15} /> Create Team</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-match"> <FaBasketballBall size={15}/> Create Match</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-training-team"> <MdGroupAdd size={15} /> Create Training Team</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-court"> <GiTennisCourt size={15} /> Create Court</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-personal-training"> <GiStrong size={15} /> Create Personal Training</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-group-training"> <MdGroupAdd size={15} /> Create Group Training</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-tournament"> <ImTree size={15}/> Create Tournament</Link></li>
                <li className="p-3 m-1 border-bottom rounded"><Link to="create-all-star"> <GiRainbowStar size={15}/> Create All Star</Link></li>
            </ul>
            </div>
        </li>
    )
}

export default Create
