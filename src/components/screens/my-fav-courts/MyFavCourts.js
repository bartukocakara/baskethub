import React from 'react'
import FavouriteCourtCard from '../../cards/favourite-courts/FavouriteCourtCard'
import Search from '../../layouts/quick-search/Search';
import CourtWidget from '../../layouts/widgets/court-widget/CourtWidget';

const MyFavCourts = () => {
    return (
        <>
        <div className="col-8">
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
        </div>
        <CourtWidget />
        </>
    )
}

export default MyFavCourts
