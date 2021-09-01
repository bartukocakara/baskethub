import Tournaments from './../../screens/tournaments/Tournaments';
import TournamentDetail from './../../components/card-details/tournament-detail/TournamentDetail';
import {
    Route,
  } from "react-router-dom";
const tournamentRoutes = [
            <Route path="/tournaments" component={Tournaments} />,
            <Route path="/tournament-detail" component={TournamentDetail} />

        ]

export default tournamentRoutes
