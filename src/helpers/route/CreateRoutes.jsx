import CreateSubscription from './../../screens/create/create-subscription/CreateSubscription';
import CreatePersonalTraining from '../../screens/create/create-personal-training/CreatePersonalTraining';
import CreateCourt from './../../screens/create/create-court/CreateCourt';
import CreateTournament from './../../screens/create/create-tournament/CreateTournament';
import CreateMatch from './../../screens/create/create-match/CreateMatch';
import CreateTeam from './../../screens/create/create-team/CreateTeam';
import CreateTrainingTeam from '../../screens/create/create-training-team/CreateTrainingTeam';
import CreateAllStar from '../../screens/create/create-all-star/CreateAllStar';
import {
    Route,
  } from "react-router-dom";
import CreateGroupTraining from '../../screens/create/create-group-training/CreateGroupTraining';
const createRoutes = [
            <Route path="/create-team" component={CreateTeam} />,
            <Route path="/create-training-team" component={CreateTrainingTeam} />,
            <Route path="/create-court" component={CreateCourt} />,
            <Route path="/create-personal-training" component={CreatePersonalTraining} />,
            <Route path="/create-group-training" component={CreateGroupTraining} />,
            <Route path="/create-tournament" component={CreateTournament} />,
            <Route path="/create-match-event" component={CreateMatch} />,
            <Route path="/create-subscription" component={CreateSubscription} />,
            <Route path="/create-all-star" component={CreateAllStar} />,
        ]

export default createRoutes
