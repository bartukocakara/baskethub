import React from 'react'
import "./_playerDetail.scss";
import PlayerDetailTop from './partials/PlayerDetailTop';
import PlayerDetailStatictics from './partials/PlayerDetailStatictics';
import PlayerDetailActivities from './partials/PlayerDetailActivities';

const PlayerDetail = () => {

    
    return (
        <>
            <div class="col-12">
                <div className="row">
                    <PlayerDetailTop />
                    <PlayerDetailStatictics />
                    <PlayerDetailActivities />
                </div>
            </div>
        </>
    )
}

export default PlayerDetail
