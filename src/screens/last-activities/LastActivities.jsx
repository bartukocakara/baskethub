import React from 'react'
import MyMatchesCard from '../../components/cards/my-matches/MyMatchesCard'
import Search from '../../components/layouts/quick-search/Search';
import MatchWidget from '../../components/layouts/widgets/match-widget/MatchWidget';

const LastActivities = () => {
    return (
        <>
        <div className="col-md-8">
            <h5 className="card-title screen-tile">Last Activities</h5>
            <Search />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((i, lasActivity) => (
                            <MyMatchesCard key={i}/>
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <MatchWidget />
        </>
    )
}

export default LastActivities
