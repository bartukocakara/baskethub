import React from 'react'
import "./_myTeamsCard.scss";
import {
    Link
  } from "react-router-dom";
const MyTeamsCard = () => {
    return (
        <div className="col-xl-6 col-md-6 col-sm-12 feed-card feed-my-teams-card">
            <div className="card">
                <h4 className="card-title text-center">Bornova Team</h4>
                <div className="card-content d-flex card-body card-custom">
                    <ul>
                        {
                            [...Array(5)].map(() => (
                                <li><p>Bartu Kocakara</p></li>

                            ))
                        }
                        
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="footer">
                        <Link to="my-team-detail">
                            Team Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTeamsCard
