import React from 'react'

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
