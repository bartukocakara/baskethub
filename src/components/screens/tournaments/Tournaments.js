import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'
import Search from '../../layouts/quick-search/Search';
import MatchWidget from '../../layouts/widgets/match-widget/MatchWidget';

const Tournaments = () => {
    return (
        <>
        <div className="col-8">
            <Search />
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

export default Tournaments
