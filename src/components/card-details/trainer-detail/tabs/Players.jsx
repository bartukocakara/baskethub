import { FaFileContract } from "@react-icons/all-files/fa/FaFileContract"
import { Link } from "react-router-dom"

const Players = () => {
    return (
        <div className="row">
            {
                [...Array(5)].map((player) => (
                    <div class="col-md-3">
                        <div to="player-detail" class="card border rounded card-shadow">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-xl m-auto">
                                        <img src="../assets/images/faces/1.jpg" alt="Face 1" />
                                        <Link class="font-bold m-auto mx-2">John Duck, 23</Link>
                                    </div>
                                </div>
                                <div class=" mt-4 d-flex">
                                    <p class="font-bold">Start Date :</p> <span>16/12/2022</span>
                                    </div>                                    
                                <div class=" d-flex">
                                    <p class="font-bold">End Date :</p> <span>16/12/2022</span>
                                </div>                                    
                            </div>
                            <div class="card-footer">
                                <Link to="contract-detail" class="btn btn-primary">
                                    <FaFileContract />  
                                </Link>
                        </div>
                        </div>
                    </div>
                ))
            
            }
        </div>
    )
}

export default Players
