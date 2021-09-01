import Matches from './../../screens/matches/Matches';
import MatchRequestResult from './../../screens/profile/partials/match-request-result/MatchRequestResult';
import MatchDetail from './../../components/card-details/match-detail/MatchDetail';

const MatchRoutes = () => {
    return (
        <>
            <Route path="/matches" component={Matches} />
            <Route path="/my-matches" component={MyMatches} />
            <Route path="/match-detail" component={MatchDetail} />
            <Route path="/ended-match-detail" component={EndedMatch} />
            <Route path="/match-request-result" component={MatchRequestResult} />
        </>
    )
}

export default MatchRoutes
