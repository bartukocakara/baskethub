const Comments = () => {
    return (
        <div className="row m-5">
            {
                [...Array(5)].map((property) => (
                    <div className="col-md-4  p-2 mb-2">
                        <div className="border rounded m-2 p-2 text-center">
                            <div className="avatar m-auto">
                                <img src="assets/images/faces/1.jpg" alt="" srcset="" />
                                <span className="avatar-status bg-success"></span>
                            </div>
                            <div className="name flex-grow-1">
                                <h6 className="mb-0">Fred</h6>
                            </div>
                            <div className="name flex-grow-1 p-4">
                                <p>Basketball quotes are terrific for motivating and inspiring coaches and athletes. Countless times I’ve recited various quotes to my players or fellow coaches and they always have a positive effect.</p>
                            </div>
                            <div className="name flex-grow-1 text-center">
                                <div id="basic" class="star-rating" style={{ width: "160px", height: "32px", backgroundSize: "32px" }} title="5/5"><div class="star-value" style={{ backgroundSize: "32px", width: "0%" }}></div></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments
