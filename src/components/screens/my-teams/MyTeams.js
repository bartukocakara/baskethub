import React from 'react';
import MyTeamsCard from '../../cards/my-teams/MyTeamsCard';
import Search from '../../layouts/search/Search';

import "./_myTeams.scss";
const MyTeams = () => {
    return (
        <>
            <Search />
            <section id="content-types">
                <div className="row">
                    {
                        [...Array(5)].map((match) => (
                            <MyTeamsCard />
                        ))
                    }
                   
                </div>
            </section>
        </>
    )
}

export default MyTeams
