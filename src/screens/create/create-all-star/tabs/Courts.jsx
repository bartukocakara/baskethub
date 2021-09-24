const Courts = () => {

    // only one court can be selected

    return (
        <div className="row m-auto">
            <div className="col-md-12">
                <div className="form-group d-flex">
                    <input type="search" className="form-control w-50 m-auto" placeholder="Ara..."/>
                    <input type="date" className="form-control w-25 m-auto"/>
                </div>
            </div>
            {
                [...Array(5)].map(() => (
                    <div class="card col-md-4">
                        <div class=" border rounded text-center card-shadow">
                            <div class="w-100">
                                <img src="assets/images/samples/basket-salon2.jpg" className="w-100 rounded" alt="Face 1" />
                                <div class="w-100 name">
                                <h6 class="my-2">Bornova Spor Salonu, <span>İzmir</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            
            }
            
        </div>
    )
}

export default Courts
