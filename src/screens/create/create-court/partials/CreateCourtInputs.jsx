
import CourtInfo from './../tabs/CourtInfo'
import HostInfo from './../tabs/HostInfo'
import Images from './../tabs/Images'
import Price from './../tabs/Price'
import Subscription from './../tabs/Subscription'
const CreateCourtInputs = () => {
    return (
        <div class="col-9">
            <div class="tab-content create-court" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-host-info" role="tabpanel" aria-labelledby="v-pills-host-info-tab">
                   <HostInfo />
                </div>
                <div class="tab-pane fade" id="v-pills-court-info" role="tabpanel" aria-labelledby="v-pills-court-info-tab">
                    <CourtInfo/>
                </div>
                <div class="tab-pane fade" id="v-pills-price" role="tabpanel" aria-labelledby="v-pills-price-tab">
                    <Price/>
                </div>
                <div class="tab-pane fade" id="v-pills-subscription" role="tabpanel" aria-labelledby="v-pills-subscription-tab">
                    <Subscription/>
                </div>
                <div class="tab-pane fade" id="v-pills-images" role="tabpanel" aria-labelledby="v-pills-images-tab">
                    <Images/>
                </div>
            </div>
            <div className="form-group col-md-12 p-2 text-center p-4">
                <input type="button" className="btn btn-success btn-lg w-25 fw-bold" id="helpInputTop" value="Create" />
            </div>
        </div>
    )
}

export default CreateCourtInputs
