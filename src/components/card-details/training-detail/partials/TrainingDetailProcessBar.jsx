import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle";
import { RiErrorWarningFill } from "@react-icons/all-files/ri/RiErrorWarningFill";
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
const TrainingDetailProcessBar = () => {
    return (
        <>
            <div class="progress progress-info w-50 m-auto">
                <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
            <div className="d-flex m-auto justify-content-between px-5 py-1">
                <span className="fw-bold d-inline mx-2 px-4">Dates Decided <AiFillCheckCircle size={22} className="text-success"/></span>
                <span className="fw-bold d-inline mx-2 px-4">Courts Reserved <AiFillCheckCircle size={22} className="text-success"/></span>
                <span className="fw-bold d-inline mx-2 px-4">Payment Completed<RiErrorWarningFill size={22} className="text-warning"/></span>
                <span className="fw-bold d-inline mx-2 px-4">All Players Activated<MdCancel size={22} className="text-danger"/></span>
            </div>
        </>
    )
}

export default TrainingDetailProcessBar
