import React from 'react'
import FavouritePlayerCard from '../../components/cards/favourite-players/FavouritePlayerCard'
import PlayerSearch from '../../components/layouts/quick-search/player-search/PlayerSearch';
import PlayerWidget from '../../components/layouts/widgets/player-widget/PlayerWidget';
import "./_myFavPlayers.scss";

const MyFavPlayers = () => {
    return (
        <>
        <div className="col-md-8">
            <PlayerSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((i, match) => (
                            <FavouritePlayerCard key={i} />
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
