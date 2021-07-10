import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'
import MatchSearch from '../../layouts/quick-search/match-search/MatchSearch';
import MatchWidget from '../../layouts/widgets/match-widget/MatchWidget';

const MyMatches = () => {
    return (
        <>
        <div className="col-md-8">
            <MatchSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((match) => (
                            <MyMatchesCard />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <MatchWidget />
        </>
    )
}

export default MyMatches
