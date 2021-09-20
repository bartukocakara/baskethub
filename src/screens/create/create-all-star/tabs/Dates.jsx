const Dates = () => {
    return (
        <div className="col-md-12">
            <div className="form-group d-flex">
                <h6>Start Date : </h6>
                <input type="date" className="form-control w-25 m-auto"/>
            </div>
            <div className="form-group d-flex">
                <h6>End Date : </h6>
                <input type="date" className="form-control w-25 m-auto"/>
            </div>
            <div className="form-group d-flex">
                <h6>Match Order : </h6>
                <select className="form-control w-25 m-auto"name="" id="">
                    <option value="">in 1-3 days</option>
                    <option value="">in 3-5 days</option>
                    <option value="">in 5-7 days</option>
                </select>
            </div>
        </div>
    )
}

export default Dates
