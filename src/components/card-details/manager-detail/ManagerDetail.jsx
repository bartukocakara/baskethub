import "./_managerDetail.scss";
import ManagerDetailTop from "./partials/ManagerDetailTop";
import ManagerDetailStatistics from "./partials/ManagerDetailStatistics";
import ManagerDetailNavs from "./partials/ManagerDetailNavs";
import ManagerDetailActivities from "./partials/ManagerDetailActivities";

const ManagerDetail = () => {
    return (
        <>
            <div class="col-12">
                <div className="row"> 
                    <ManagerDetailTop />
                    <ManagerDetailStatistics />
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <ManagerDetailNavs />
                                <ManagerDetailActivities />
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </>
    )
}

export default ManagerDetail
