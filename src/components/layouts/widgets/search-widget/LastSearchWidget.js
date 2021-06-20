import React from 'react'
import SearchWidgetCard from '../../../cards/widget-cards/search-widget-card/SearchWidgetCard'

const LastSearch = () => {
    return (
        <div className="col-4">
            <div class="card w-100" >
                <div class="card-header widget-header">
                    <h4>Recommended Players</h4>
                </div>
                <SearchWidgetCard />
                <SearchWidgetCard />
                <SearchWidgetCard />
            </div>
        </div>
    )
}

export default LastSearch
