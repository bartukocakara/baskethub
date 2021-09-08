import CreateSubscription from './../../screens/create/create-subscription/CreateSubscription';
import CreateTraining from './../../screens/create/create-training/CreateTraining';
import CreateCourt from './../../screens/create/create-court/CreateCourt';
import CreateTournament from './../../screens/create/create-tournament/CreateTournament';
import CreateMatch from './../../screens/create/create-match/CreateMatch';
import CreateTeam from './../../screens/create/create-team/CreateTeam';
import CreateTrainingTeam from '../../screens/create/create-training-team/CreateTrainingTeam';
import {
    Route,
  } from "react-router-dom";
const createRoutes = [
            <Route path="/create-team" component={CreateTeam} />,
            <Route path="/create-training-team" component={CreateTrainingTeam} />,
            <Route path="/create-court" component={CreateCourt} />,
            <Route path="/create-training-event" component={CreateTraining} />,
            <Route path="/create-tournament" component={CreateTournament} />,
            <Route path="/create-match-event" component={CreateMatch} />,
            <Route path="/create-subscription" component={CreateSubscription} />
        ]

export default createRoutes
