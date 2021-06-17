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
                <div className="card-footer row my-teams">
                        <Link to="my-team-detail" className="btn btn-light col-md-4 team-detail-btn">
                            Team Details
                        </Link>
                        <div className="col-md-4"></div>
                        <Link to="team-chat" className="btn btn-warning col-md-4 team-chat-btn">
                            Team Chat
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default MyTeamsCard
