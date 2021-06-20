import React from 'react'
import FavouritePlayerCard from '../../cards/favourite-players/FavouritePlayerCard'
import Search from '../../layouts/search/Search';
import PlayerWidget from '../../layouts/widgets/player-widget/PlayerWidget';

const MyFavPlayers = () => {
    return (
        <>
        <div className="col-8">
            <Search />
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
