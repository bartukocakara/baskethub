import React from 'react'
import FavouriteCourtCard from '../../cards/favourite-courts/FavouriteCourtCard'
import Search from '../../layouts/search/Search';

const MyFavCourts = () => {
    return (
        <>
            <Search />

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
