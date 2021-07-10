import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'
import LastSearchWidget from '../../layouts/widgets/search-widget/LastSearchWidget'

const LastSearch = () => {
    return (
        <>
        <div className="col-md-8">
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
        <LastSearchWidget />
        </>
    )
}

export default LastSearch
