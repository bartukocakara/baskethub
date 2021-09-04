import React from 'react'
import MyMatchesCard from '../../components/cards/my-matches/MyMatchesCard'
import LastSearchWidget from '../../components/layouts/widgets/search-widget/LastSearchWidget'
import LastSearchComponent from '../../components/layouts/quick-search/last-search/LastSearchComponent';

const LastSearch = () => {
    return (
        <>
        <div className="col-md-8">
            <LastSearchComponent />

            <section id="content-types">
                <div className="row">
                    {
                        [...Array(10)].map((i, match) => (
                            <MyMatchesCard key={i}/>
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
