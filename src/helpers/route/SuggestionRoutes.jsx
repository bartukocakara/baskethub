import SeeMoreCoaches from './../../components/suggestions/coaches/SeeMoreCoaches';
import SeeMoreCourts from './../../components/suggestions/courts/SeeMoreCourts';
import SeeMoreMatches from './../../components/suggestions/matches/SeeMoreMatches';
import SeeMoreManagers from './../../components/suggestions/managers/SeeMoreManagers';
import SeeMoreTournaments from './../../components/suggestions/tournaments/SeeMoreTournaments';
import SeeMoreTrainings from './../../components/suggestions/trainings/SeeMoreTrainings';
import SeeMoreTrainers from './../../components/suggestions/trainers/SeeMoreTrainers';
import SeeMorePlayers from './../../components/suggestions/players/SeeMorePlayers';
import SeeMoreTeams from './../../components/suggestions/teams/SeeMoreTeams';
import {
    Route,
  } from "react-router-dom";
const suggestionRoutes = [
            <Route path="/suggestion-players" component={SeeMorePlayers} />,
            <Route path="/suggestion-teams" component={SeeMoreTeams} />,
            <Route path="/suggestion-coaches" component={SeeMoreCoaches} />,
            <Route path="/suggestion-matches" component={SeeMoreMatches} />,
            <Route path="/suggestion-courts" component={SeeMoreCourts} />,
            <Route path="/suggestion-managers" component={SeeMoreManagers} />,
            <Route path="/suggestion-trainers" component={SeeMoreTrainers} />,
            <Route path="/suggestion-trainings" component={SeeMoreTrainings} />,
            <Route path="/suggestion-tournaments" component={SeeMoreTournaments} />
        ]

export default suggestionRoutes
