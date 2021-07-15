import './_app.scss';
import "./_index.scss";

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import LastActivities from './components/screens/last-activities/LastActivities';
import MyMatches from './components/screens/my-matches/MyMatches';
import MyFavCourts from './components/screens/my-fav-courts/MyFavCourts';
import LastSearch from './components/screens/last-search/LastSearch';
import MyFavPlayers from './components/screens/my-fav-players/MyFavPlayers';
import Checkout from './components/screens/checkout/Checkout';
import MyTeams from './components/screens/my-teams/MyTeams';
import PlayerDetail from './components/card-details/player-detail/PlayerDetail';
import CourtDetail from './components/card-details/court-detail/CourtDetail';
import MyTeamDetail from './components/card-details/my-team-detail/MyTeamDetail';
import TeamDetail from './components/card-details/team-detail/TeamDetail';
import EndedMatch from './components/card-details/ended-match/EndedMatch';
import ServicePolicies from './components/info/service-policies/ServicePolicies';
import About from './components/info/about/About';
import Secure from './components/info/secure/Secure';
import Contact from './components/info/contact/Contact';
import Cookies from './components/info/cookies/Cookies';
import Faq from './components/info/faq/Faq';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Profile from './components/screens/profile/Profile';
import MessageDetail from './components/screens/message-detail/MessageDetail';
import TeamMessage from './components/screens/team-message-detail/TeamMessage';
import MatchMessage from './components/screens/match-message-detail/MatchMessage';
import NotificationDetail from './components/screens/notification-detail/NotificationDetail';
import Notifications from './components/screens/notifications/Notifications';
import MatchDetail from './components/card-details/match-detail/MatchDetail';
import Tournaments from './components/screens/tournaments/Tournaments';
import TrainerDetail from './components/card-details/trainer-detail/TrainerDetail';
import CreateTeam from './components/screens/create/create-team/CreateTeam';
import ProfileEdit from './components/screens/profile/ProfileEdit';
import CreateCourt from './components/screens/create/create-court/CreateCourt';
import CreateTournament from './components/screens/create/create-tournament/CreateTournament';
import Matches from './components/screens/matches/Matches';
import { ToastContainer } from 'react-toastify';
import TournamentDetail from './components/card-details/tournament-detail/TournamentDetail';
import CreateMatch from './components/screens/create/create-match/CreateMatch';
import Watch from './components/screens/watch/Watch';
import Sponsors from './components/screens/sponsors/Sponsors';
import MyFavTrainers from './components/screens/my-fav-trainers/MyFavTrainers';
import MyTrainers from './components/screens/my-trainers/MyTrainers';
import CourtListMap from './components/screens/courts/court-list-map/CourtListMap';
import MatchRequestResult from './components/screens/profile/partials/match-request-result/MatchRequestResult';
import CreateSubscription from './components/screens/create/create-subscription/CreateSubscription';
import CreateTraining from './components/screens/create/create-training/CreateTraining';

function App() {
  return (
      <>
          {/* <ToastContainer autoClose={2000} toastClassName="dark-toast"/> */}
          <ToastContainer autoClose={2000} toastClassName="dark-toast"/>

          {/* navbar */}
          {/* searchbar */}
          <Router>
              <Sidebar />
                <div id="main" class='layout-navbar'>
                    <Navbar />
                    <div id="main-content" className="container main-section">
                      <div className="row">
                          <Switch>
                              <Route exact path="/" component={LastActivities} />
                              <Route path="/matches" component={Matches} />
                              <Route path="/my-matches" component={MyMatches} />
                              <Route path="/my-trainers" component={MyTrainers} />
                              <Route path="/match-detail" component={MatchDetail} />
                              <Route path="/ended-match-detail" component={EndedMatch} />
                              <Route path="/favourite-players" component={MyFavPlayers} />
                              <Route path="/favourite-trainers" component={MyFavTrainers} />
                              <Route path="/player-detail" component={PlayerDetail} />
                              <Route path="/favourite-courts" component={MyFavCourts} />
                              <Route path="/courts-map" component={CourtListMap} />
                              <Route path="/court-detail" component={CourtDetail} />
                              <Route path="/last-search" component={LastSearch} />
                              <Route path="/tournaments" component={Tournaments} />
                              <Route path="/my-teams" component={MyTeams} />
                              <Route path="/my-team-detail" component={MyTeamDetail} />
                              <Route path="/team-detail" component={TeamDetail} />
                              <Route path="/trainer-detail" component={TrainerDetail} />
                              <Route path="/team/:name" component={MyTeamDetail} />
                              <Route path="/player-detail/:name" component={PlayerDetail} />
                              <Route path="/court-detail/:name" component={CourtDetail} />
                              <Route path="/tournament-detail" component={TournamentDetail} />
                              <Route path="/service-policies" component={ServicePolicies} />
                              <Route path="/about-us" component={About} />
                              <Route path="/sponsors" component={Sponsors} />
                              <Route path="/secure" component={Secure} />
                              <Route path="/contact" component={Contact} />
                              <Route path="/cookies" component={Cookies} />
                              <Route path="/faq" component={Faq} />
                              <Route path="/my-profile" component={Profile} />
                              <Route path="/profile-edit" component={ProfileEdit} />
                              <Route path="/message-detail" component={MessageDetail} />
                              <Route path="/team-chat" component={TeamMessage} />
                              <Route path="/match-chat" component={MatchMessage} />
                              <Route path="/notifications" component={Notifications} />
                              <Route path="/notification-detail" component={NotificationDetail} />
                              <Route path="/create-team" component={CreateTeam} />
                              <Route path="/create-court" component={CreateCourt} />
                              <Route path="/create-training-event" component={CreateTraining} />
                              <Route path="/create-tournament" component={CreateTournament} />
                              <Route path="/create-match-event" component={CreateMatch} />
                              <Route path="/create-subscription" component={CreateSubscription} />
                              <Route path="/watch" component={Watch} />
                              <Route path="/checkout" component={Checkout} />
                              <Route path="/match-request-result" component={MatchRequestResult} />
                          </Switch>
                          </div>
                    </div>
                </div>
          </Router>
    </>
  );
}

export default App;
