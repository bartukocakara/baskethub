import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import { BiCheckDouble } from "@react-icons/all-files/bi/BiCheckDouble";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
const CoachDetailStatistics = () => {
    return (
        <>
            <div className="col-12 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon purple">
                                    <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Profile Views</h6>
                                <h6 className="font-extrabold mb-0">112.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon blue">
                                <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Followers</h6>
                                <h6 className="font-extrabold mb-0">183.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon green">
                                <BiCheckDouble style={{ color:"#fff", fontSize:"30px" }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Match Joined</h6>
                                <h6 className="font-extrabold mb-0">80.000</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-3 py-4-5 profile-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="stats-icon green">
                                <HiCheck style={{ color:"#fff", fontSize:"30px", }}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h6 className="text-muted font-semibold">Match Accepted</h6>
                                <h6 className="font-extrabold mb-0">112</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoachDetailStatistics
