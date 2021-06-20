import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'
import Search from '../../layouts/search/Search';
import MatchWidget from '../../layouts/widgets/match-widget/MatchWidget';

const MyMatches = () => {
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

export default MyMatches
