const CreateTeamInputs = () => {
    return (
        <div className="col-md-12 row">
            <div className="form-group col-md-4">
                <h6>Team Name</h6>
                <input className="form-control w-100" />
            </div>
            <div className="form-group col-md-4">
                <h6>Team Country</h6>
                <select className="form-control">
                        <option>Germany</option>
                        <option>Spain</option>
                        <option>Netherlands</option>
                </select>
            </div>
            <div className="form-group col-md-4">
                <h6>Team City</h6>
                <select className="form-control">
                    <option>Berlin</option>
                    <option>Barcelona</option>
                    <option>Amsterdam</option>
                </select>
            </div>
        </div>
    )
}

export default CreateTeamInputs
