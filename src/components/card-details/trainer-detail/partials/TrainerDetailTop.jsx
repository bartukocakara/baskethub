import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";

import {
    Link
  } from "react-router-dom";
import {BiShareAlt} from "@react-icons/all-files/bi/BiShareAlt";

const TrainerDetailTop = () => {
    return (
        <div class="card">
            <div class="card-body py-4 px-5">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                        <img src="assets/images/faces/1.jpg" alt="Face 1" />
                    </div>
                    <div class="ms-3 name">
                        <h5 class="font-bold">John Duck</h5>
                        <h6 class="text-muted mb-0">@johnducky</h6>
                    </div>
                    <div class="ms-5">
                        <GoLocation />
                        <p class="font-bold">İzmir</p>
                    </div>
                    <div class="ms-5 name">
                        <h5 class="font-bold">Positions</h5>
                        <h6 class="text-muted mb-0">C, PF, SF </h6>
                    </div>
                    <div className="buttons text-center player-detail-buttons ml-5">
                        <button className="btn btn-warning share">Takip Et +</button>
                        <Link to="message-detail" className="btn btn-light message">
                            <i className='bi bi-envelope bi-sub fs-4'></i>
                        </Link>
                        <button className="btn btn-light share fs-4"><BiShareAlt/></button>
                        <button className="btn btn-warning request-join p-3">Request Join Match <FaHandshake className="player-detail-handshake" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerDetailTop
