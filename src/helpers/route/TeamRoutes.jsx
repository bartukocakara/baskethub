import MyTeams from './screens/my-teams/MyTeams';
import MyTeamDetail from './components/card-details/my-team-detail/MyTeamDetail';
import TeamDetail from './components/card-details/team-detail/TeamDetail';

const TeamRoutes = () => {
    return (
        <>
            <Route path="/my-teams" component={MyTeams} />
            <Route path="/my-team-detail" component={MyTeamDetail} />
            <Route path="/team-detail" component={TeamDetail} />
            <Route path="/team/:name" component={MyTeamDetail} />

        </>
    )
}

export default TeamRoutes
