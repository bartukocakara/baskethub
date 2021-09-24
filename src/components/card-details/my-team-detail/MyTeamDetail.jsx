import React from 'react';

import TeamDetailTop from './partials/TeamDetailTop';
import TeamDetailTable from './partials/TeamDetailTable';

const MyTeamDetail = () => {
    return (
        <>
            <div class="col-10 m-auto">
                <div class="card">
                    <TeamDetailTop />
                    <TeamDetailTable />
                </div>
            </div>
        </>
    )
}

export default MyTeamDetail
