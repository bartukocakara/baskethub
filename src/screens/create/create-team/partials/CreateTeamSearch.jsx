import { BsFillStarFill } from "@react-icons/all-files/bs/BsFillStarFill"

const CreateTeamSearch = () => {
    return (
        <div className="w-100 d-flex m-auto row">
            <div className="col-md-3"></div>
            <h6 className="text-center p-3 m-auto col-md-3">Favourite Player List <BsFillStarFill /> </h6>
            <div class="form-group position-relative col-md-4 has-icon-right d-inline w-25">
                <input type="text" class="form-control p-2" placeholder="Quick search..." />
                <div class="form-control-icon">
                    <i class="bi bi-search m-3"></i>
                </div>
            </div>
        </div>
    )
}

export default CreateTeamSearch
