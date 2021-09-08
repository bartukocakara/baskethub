import MyTeams from './../../screens/my-teams/MyTeams';
import MyTeamDetail from './../../components/card-details/my-team-detail/MyTeamDetail';
import TeamDetail from './../../components/card-details/team-detail/TeamDetail';
import {
    Route,
  } from "react-router-dom";
import TeamSettings from '../../components/card-details/team-detail/team-settings/TeamSettings';
const teamRoutes = [
            <Route path="/my-teams" component={MyTeams} />,
            <Route path="/my-team-detail" component={MyTeamDetail} />,
            <Route path="/team-detail" component={TeamDetail} />,
            <Route path="/team-settings" component={TeamSettings} />,
            <Route path="/team/:name" component={MyTeamDetail} />

        ]

export default teamRoutes
