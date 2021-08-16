const Address = () => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="form-group row align-items-center">
                    <div class="col-lg-3 col-8">
                        <label class="col-form-label">Company Name : </label>
                    </div>
                    <div class="col-lg-9 col-9">
                        <h6>Baskethall Company Lmt.</h6>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group row align-items-center">
                    <div class="col-lg-3 col-8">
                        <label class="col-form-label">Where are we : </label>
                    </div>
                    <div class="col-lg-9 col-9">
                        <h6>İzmir, Turkey</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora natus in harum ullam repellat.</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-group row align-items-center">
                    <div class="col-lg-3 col-8">
                        <label class="col-form-label">Acitve Branchs : </label>
                    </div>
                    <div class="col-lg-9 col-9">
                        <div class="badges">
                            <span class="badge m-1 p-2 bg-primary">Turkey</span>
                            <span class="badge m-1 p-2 bg-secondary">Greece</span>
                            <span class="badge m-1 p-2 bg-success">Lithuania</span>
                            <span class="badge m-1 p-2 bg-danger">Usa</span>
                            <span class="badge m-1 p-2 bg-warning">Netherlands</span>
                            <span class="badge m-1 p-2 bg-danger">Spain</span>
                            <span class="badge m-1 p-2 bg-dark">Germany</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
