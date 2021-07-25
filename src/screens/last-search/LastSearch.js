import React from 'react'
import MyMatchesCard from '../../components/cards/my-matches/MyMatchesCard'
import LastSearchWidget from '../../components/layouts/widgets/search-widget/LastSearchWidget'

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
