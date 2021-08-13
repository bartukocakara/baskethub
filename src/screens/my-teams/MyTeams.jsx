import React from 'react';
import MyTeamsCard from '../../components/cards/my-teams/MyTeamsCard';
import TeamSearch from '../../components/layouts/quick-search/team-search/TeamSearch';
import TeamWidget from '../../components/layouts/widgets/team-widget/TeamWidget';

import "./_myTeams.scss";
const MyTeams = () => {
    return (
        <>
        <div className="col-md-8">
            <TeamSearch />
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
