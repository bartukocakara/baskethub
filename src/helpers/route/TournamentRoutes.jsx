import Tournaments from './../../screens/tournaments/Tournaments';
import TournamentDetail from './../../components/card-details/tournament-detail/TournamentDetail';
import {
    Route,
  } from "react-router-dom";
import TournamentSettings from '../../components/card-details/tournament-detail/settings/TournamentSettings';
import CreateGift from '../../components/card-details/tournament-detail/settings/settings-tabs/create/CreateGift';
import EditGift from '../../components/card-details/tournament-detail/settings/settings-tabs/edit/EditGift';
const tournamentRoutes = [
            <Route path="/tournaments" component={Tournaments} />,
            <Route path="/tournament-detail" component={TournamentDetail} />,
            <Route path="/tournament-settings" component={TournamentSettings} />,
            <Route path="/ceate-gift" component={CreateGift} />,
            <Route path="/edit-gift" component={EditGift} />

        ]

export default tournamentRoutes
