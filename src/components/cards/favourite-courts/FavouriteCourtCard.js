import React from 'react'
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import "./_favouriteCourt.scss";        
const FavouriteCourtCard = () => {
    return (
        <div className="col-xl-12 col-md-12 col-sm-12 feed-card feed-my-fav-courts-card">
            <div className="card">
                <h4 className="card-title">Dr. Cavit Spor Salonu - İzmir/Bornova</h4>
                <div className="card-content d-flex card-body card-custom">
                    <div class="avatar avatar-lg me-2 card-avatar">
                        <img src="assets/images/faces/2.jpg" alt="" srcset="" />
                    </div>
                    <div className="card-middle-text d-flex">
                        <div class="car-middle-div">
                            <p className="prop-name">Hijyen</p>
                            <p>5/10</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name">Güvenilirlik</p>
                            <p>8/10</p>
                        </div>
                        <div class="car-middle-div">
                            <p className="prop-name">Cevap Hızı</p>
                            <p>7/10</p>
                        </div>

                    </div>
                    <div className="card-left-image">
                        <img className="img-fluid w-50 card-image" src="assets/images/samples/hall.jpg"
                        alt="Card image cap" />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="footer-left">
                        <a href="">
                            Court Details
                        </a>
                    </div>
                    <div className="footer-right">
                    <a href="" >
                        <AiOutlineMail className="card-footer-icon" />
                    </a>
                    <a href="" >
                        <FaHandshake className="card-footer-icon" />
                    </a>
                    <a href="" >
                        <FiShare2 className="card-footer-icon" />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteCourtCard
