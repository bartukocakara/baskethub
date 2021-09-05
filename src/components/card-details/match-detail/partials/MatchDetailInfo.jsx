import { FcCalendar } from "@react-icons/all-files/fc/FcCalendar";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { FcMoneyTransfer } from "@react-icons/all-files/fc/FcMoneyTransfer";
import { GiTrophyCup } from "@react-icons/all-files/gi/GiTrophyCup";
const MatchDetailInfo = () => {
    return (
        <div className="col-lg-6 col-md-12">
            <div class=" text-center p-2 row">
                <h6 class="d-inline">Match Details </h6>
                    <span className="badge bg-success w-75  p-1 m-auto">
                        <GiTrophyCup size={25} className="text-light m-2"/>
                        Reward is : Match Payment
                    </span>
                    <div className="col-md-6 bg-light row mt-3 p-0">
                        <div className="col-md-3">
                        <FcCalendar size={30}/> 
                        </div>
                        <div className="col-md-9">
                        <span class="badge text-dark"> 21/06/2021 | 12:00 - 13:00</span>
                        </div>
                        <div className="col-md-3">
                        <BsFillPeopleFill size={30} className="text-success m-1"/>
                        </div>
                        <div className="col-md-9">
                            <label class=" p-2">
                             Player Count : <span class="badge text-dark">8</span>
                            </label>
                        </div>
                        <div className="col-md-3">
                            <BsFillPeopleFill size={30} className="text-warning m-1"/>
                        </div>
                        <div className="col-md-9">
                            <label class=" p-2 w-100">
                            Player Need <span class="badge text-dark">1-3</span>
                            </label>
                        </div>
                        <div className="col-md-3 mt-2">
                            <img className=" w-100" src="assets/images/logo/basketball-court.svg" alt="court-field"/>
                        </div>
                        <div className="col-md-9">
                            <label class=" p-2 w-100">
                            Court field <span class="badge text-dark">Half Court</span>
                        </label>
                        </div>
                </div>
                <div className="col-md-6 row mt-3">
                    <div className="col-md-12 ">
                        <label class="btn-light text-dark p-2 w-100">
                            <FcMoneyTransfer size={30}/>Ödeme Türü <span class="badge text-dark d-block">Credit Card</span>
                        </label>
                    </div>
                    <div className="col-md-12">
                        <label class="btn-light text-dark p-2 w-100">
                            Ödeme Dağılımı <span class="badge text-dark">Seperate Payment</span>
                        </label>
                    </div>
                    <div className="col-md-12">
                        <label class="btn-light text-dark p-2 w-100">
                            Ön ödeme durumu <span class="badge text-dark d-block">Pre-paid</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchDetailInfo
