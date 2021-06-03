import React from 'react'
import FavouriteCourtCard from '../../cards/favourite-courts/FavouriteCourtCard'

const MyFavCourts = () => {
    return (
        <>
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <FavouriteCourtCard />
                        ))
                    }
                   
                </div>
            </section>
        </>
    )
}

export default MyFavCourts
