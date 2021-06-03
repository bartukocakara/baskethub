import React from 'react'
import FavouritePlayerCard from '../../cards/favourite-players/FavouritePlayerCard'

const MyFavPlayers = () => {
    return (
        <>
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
