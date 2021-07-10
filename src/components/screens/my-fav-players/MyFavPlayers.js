import React from 'react'
import FavouritePlayerCard from '../../cards/favourite-players/FavouritePlayerCard'
import PlayerSearch from '../../layouts/quick-search/player-search/PlayerSearch';
import PlayerWidget from '../../layouts/widgets/player-widget/PlayerWidget';
import "./_myFavPlayers.scss";

const MyFavPlayers = () => {
    return (
        <>
        <div className="col-md-8">
            <PlayerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <FavouritePlayerCard />
                        ))
                    }
            
                </div>
            </section>
        </div>
        <PlayerWidget />
        </>
    )
}

export default MyFavPlayers
