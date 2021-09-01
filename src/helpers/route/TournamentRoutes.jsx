import Tournaments from './screens/tournaments/Tournaments';
import TournamentDetail from './components/card-details/tournament-detail/TournamentDetail';

const TournamentRoutes = () => {
    return (
        <>
            <Route path="/tournaments" component={Tournaments} />
            <Route path="/tournament-detail" component={TournamentDetail} />

        </>
    )
}

export default TournamentRoutes
