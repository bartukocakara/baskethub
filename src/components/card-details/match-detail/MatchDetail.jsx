import React from 'react'
import MatchDetailTeamList from './partials/MatchDetailTeamList';
import "./_matchDetail.scss";
import MatchDetailTop from './partials/MatchDetailTop';
import MatchDetailCourtImages from './partials/MatchDetailCourtImages';
import MatchDetailInfo from './partials/MatchDetailInfo';

const MatchDetail = () => {
    
    return (
        <>
        
        <div className="row">
            <MatchDetailTop />
            <MatchDetailCourtImages />
            <MatchDetailInfo />
            <MatchDetailTeamList />
        </div>
        </>
    )
}

export default MatchDetail
