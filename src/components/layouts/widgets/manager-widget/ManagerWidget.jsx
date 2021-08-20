import React from 'react'
import ManagerWidgetCard from '../../../cards/widget-cards/manager-widget-card/ManagerWidgetCard'
import "./_managerWidget.scss";
import { BsArrowRight } from "@react-icons/all-files/bs/BsArrowRight";
import { Link } from 'react-router-dom';

const ManagerWidget = () => {
    return (
        <div className="col-4">
            <div class="card w-100 players-widget" >
                <h5 className="text-center m-3">Recommended Managers</h5>
                <div className="card-player-messages m-2">
                {
                    [...Array(5)].map((manager) => (
                        <ManagerWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link to="suggestion-managers" className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default ManagerWidget
