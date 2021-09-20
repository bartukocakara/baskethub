import { Link } from "react-router-dom"

const Players = () => {
    return (
        <div className="row m-auto">
            <div className="col-md-12">
                <div className="form-group d-flex">
                    <input type="search" className="form-control w-25 m-auto" placeholder="Ara..."/>
                </div>
            </div>
            {
                [...Array(5)].map(() => (
                    <div class="card col-md-3 ">
                        <div class="card-body border rounded text-center">
                            <div class="align-items-center">
                                <div class="avatar avatar-lg m-auto">
                                    <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                    <div class="w-100 name m-1">
                                        <h6 class="text-muted">
                                            <Link to="player-detail"> John Duck</Link>,
                                            <span>27</span>
                                        </h6>
                                        <input type="checkbox" className="m-auto form-check-input"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            
            }
            
        </div>
    )
}

export default Players
