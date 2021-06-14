import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'
import Search from '../../layouts/search/Search';

const MyMatches = () => {
    return (
        <>
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
        </>
    )
}

export default MyMatches
