import React from 'react'
import FavouritePlayerCard from '../../cards/favourite-players/FavouritePlayerCard'
import Search from '../../layouts/search/Search';

const MyFavPlayers = () => {
    return (
        <>
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
        </>
    )
}

export default MyFavPlayers
