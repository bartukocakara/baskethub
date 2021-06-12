import React from 'react'
import MyMatchesCard from '../../cards/my-matches/MyMatchesCard'

const LastSearch = () => {
    return (
        <>
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

export default LastSearch
