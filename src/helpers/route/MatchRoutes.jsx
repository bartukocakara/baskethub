import Matches from './../../screens/matches/Matches';
import MatchRequestResult from './../../screens/profile/tabs/match-request-result/MatchRequestResult';
import MatchDetail from './../../components/card-details/match-detail/MatchDetail';
import MyMatches from './../../screens/my-matches/MyMatches';
import EndedMatch from './../../components/card-details/ended-match/EndedMatch';

import {
    Route,
  } from "react-router-dom";
const matchRoutes = [
            <Route path="/matches" component={Matches} />,
            <Route path="/my-matches" component={MyMatches} />,
            <Route path="/match-detail" component={MatchDetail} />,
            <Route path="/ended-match-detail" component={EndedMatch} />,
            <Route path="/match-request-result" component={MatchRequestResult} />
        ]

export default matchRoutes
