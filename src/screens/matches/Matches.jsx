import React from 'react'
import MyMatchesCard from '../../components/cards/my-matches/MyMatchesCard'
import MatchSearch from '../../components/layouts/quick-search/match-search/MatchSearch';
import MatchWidget from '../../components/layouts/widgets/match-widget/MatchWidget';

const Matches = () => {
    return (
        <>
        <div className="col-8">
            <MatchSearch />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((i, match) => (
                            <MyMatchesCard key={i} />
                        ))
                    }
                   
                </div>
            </section>
        </div>
        <MatchWidget />
        </>
    )
}

export default Matches
