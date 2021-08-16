import { Link } from "react-router-dom"

const OurTeam = () => {
    return (
        <div className="row m-auto">
            {
                [...Array(5)].map(() => (
                    <div class="card col-md-3 ">
                        <div class="card-body border rounded text-center" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
                            
                            <div class="align-items-center">
                                <div class="avatar avatar-lg m-auto">
                                    <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                    <div class="w-100 name m-1">
                                        <h6 class="text-muted">
                                            <Link to="player-detail"> John Duck</Link>
                                        </h6>
                                        <p>Full Stack Developer</p>
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

export default OurTeam
