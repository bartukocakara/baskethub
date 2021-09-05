const AllStarDetailTop = () => {
    return (
        <div class="row">
            <div class="col-md-6">
                <div class="card-header">
                    <h5>Amsterdam</h5>
                    <p></p>
                </div>
                <div class="card-body">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="assets/images/samples/basket-salon1.jpg" class="all-star-slider-img d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="assets/images/samples/basket-salon2.jpg" class="all-star-slider-img d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllStarDetailTop
