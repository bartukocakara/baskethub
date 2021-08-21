import React, { useEffect } from 'react'
import { useState } from 'react';
import MyMatchesCard from '../../components/cards/my-matches/MyMatchesCard'
import MatchSearch from '../../components/layouts/quick-search/match-search/MatchSearch';
import MatchWidget from '../../components/layouts/widgets/match-widget/MatchWidget';

const MyMatches = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        fetch('https://randomuser.me/api/')
        .then(results => results.json())
        .then(data => {
            setUser(data.results[0]);
        });
        setLoading(false);
    }, [])
    
    const loadingSpinner = (<div class="col-12 d-block spinner-border text-primary m-auto" role="status">
                                <span class="visually-hidden">Loading...{loading}</span>
                            </div>)
    
    return (
        <>
        <div className="col-md-8">
            <MatchSearch />
            <section id="content-types">
            {user ? "Results found" : loadingSpinner}

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
