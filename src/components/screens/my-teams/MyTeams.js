import React from 'react';
import MyTeamsCard from '../../cards/my-teams/MyTeamsCard';
import Search from '../../layouts/search/Search';
import TeamWidget from '../../layouts/widgets/team-widget/TeamWidget';

import "./_myTeams.scss";
const MyTeams = () => {
    return (
        <>
        <div className="col-8">
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
        </div>
        <TeamWidget />
        </>

    )
}

export default MyTeams
