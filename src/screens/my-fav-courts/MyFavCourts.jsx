import React from 'react'
import FavouriteCourtCard from '../../components/cards/favourite-courts/FavouriteCourtCard'
import CourtSearch from '../../components/layouts/quick-search/court-search/CourtSearch';
import CourtWidget from '../../components/layouts/widgets/court-widget/CourtWidget';
// import CourtListMap from '../courts/court-list-map/CourtListMap';

const MyFavCourts = () => {
    return (
        <>
        <div className="col-md-8">
            <CourtSearch />

            <section id="content-types">
                {/* <div className="card">
                    <CourtListMap/>
                </div> */}
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
