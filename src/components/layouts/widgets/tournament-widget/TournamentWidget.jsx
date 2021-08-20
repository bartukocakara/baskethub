import { BsArrowRight } from '@react-icons/all-files/bs/BsArrowRight'
import React from 'react'
import { Link } from 'react-router-dom'
import TournamentWidgetCard from './components/cards/widget-cards/tournament-widget-card/TournamentWidgetCard'

const TournamentWidget = () => {
    return (
        <div className="col-md-4">
            <div class="card w-100 matches-widget p-2 mb-1" >
                <h4 className="text-center m-3">Matches Around You</h4>
                <div className="card-matches">
                {
                    [...Array(5)].map((item) => (
                        <TournamentWidgetCard />
                    ))
                }
                </div>
            </div>
            <h6 className="text-center">
                <Link to="suggestion-tournaments" className="btn btn-primary">See more <BsArrowRight/></Link>
            </h6>
        </div>
    )
}

export default TournamentWidget
