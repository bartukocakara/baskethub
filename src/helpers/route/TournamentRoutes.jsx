import Tournaments from './../../screens/tournaments/Tournaments';
import TournamentDetail from './../../components/card-details/tournament-detail/TournamentDetail';
import {
    Route,
  } from "react-router-dom";
import TournamentSettings from '../../components/card-details/tournament-detail/settings/TournamentSettings';
const tournamentRoutes = [
            <Route path="/tournaments" component={Tournaments} />,
            <Route path="/tournament-detail" component={TournamentDetail} />,
            <Route path="/tournament-settings" component={TournamentSettings} />

        ]

export default tournamentRoutes
