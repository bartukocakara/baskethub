import { Link } from 'react-router-dom'

const AllStarCard = () => {
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            <Link to="all-star-detail">
            <div className="card">
                <div className="card-content">
                    <img src="assets/images/samples/basket-salon2.jpg" className="card-img-top img-fluid" style={{ height:"100px" }} alt="singleminded" />
                    <div className="card-body text-center">
                        
                        <h6>Amsterdam, <span classNameName="fw-bold">Netherlands</span></h6>
                        <p className="card-text">
                            Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes
                            tiramisu.Gummies
                            bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                        </p>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <div className="btn-group">
                        <button className="btn btn-primary"> Request</button>
                        <button className="btn btn-primary"> Share</button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default AllStarCard
