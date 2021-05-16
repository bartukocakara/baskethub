import React from 'react'
import "./_myMatchesCard.scss";

const MyMatchesCard = () => {
    return (
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-matches-card">
            <div className="card">
                <h4 className="card-title">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    </div>
                    <div className="card-middle-text d-flex">
                        <span><p>Text 1</p></span>
                        <span><p>Text 1</p></span>
                        <span><p>Text 1</p></span>

                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg"
                        alt="Card image cap" />
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <span>Card Footer</span>
                    <button className="btn btn-light-primary">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default MyMatchesCard
