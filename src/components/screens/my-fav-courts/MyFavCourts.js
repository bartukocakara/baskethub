import React from 'react'
import FavouriteCourtCard from '../../cards/favourite-courts/FavouriteCourtCard'
import CourtSearch from '../../layouts/quick-search/court-search/CourtSearch';
import CourtWidget from '../../layouts/widgets/court-widget/CourtWidget';

const MyFavCourts = () => {
    return (
        <>
        <div className="col-8">
            <CourtSearch />

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
