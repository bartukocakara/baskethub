import React from 'react'

const Sponsors = () => {
    return (
        <>
        <div className="container">
            <h5 className="text-center">Sponsors</h5>
            <div className="row">
                {
                    [...Array(10)].map((sponsor)=> (
                        <div className=" col-xl-4 col-md-6 col-sm-12">
                            <div className="card-content card">
                                <img src="assets/images/samples/motorcycle.jpg" className="card-img-top img-fluid" style={{ height:"100px" }} alt="singleminded" />
                                <div className="card-body">
                                    <h5 className="card-title">Be Single Minded</h5>
                                    <p className="card-text">
                                        Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes
                                        tiramisu.Gummies
                                        bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
        </>

    )
}

export default Sponsors
