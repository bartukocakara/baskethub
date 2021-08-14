import React from 'react'
import SearchWidgetCard from '../../../cards/widget-cards/search-widget-card/SearchWidgetCard'

const LastSearch = () => {
    return (
        <div className="col-4 ">
            <div class="card w-100 players-widget" >
                <h5  className="text-center m-3">Recommended Players</h5>
                <SearchWidgetCard />
                <SearchWidgetCard />
                <SearchWidgetCard />
            </div>
        </div>
    )
}

export default LastSearch
