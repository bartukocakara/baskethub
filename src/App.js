import './_app.scss';
import "./_index.scss";

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import LastActivities from './screens/last-activities/LastActivities';
import MyMatches from './screens/my-matches/MyMatches';
import MyFavCourts from './screens/my-fav-courts/MyFavCourts';
import LastSearch from './screens/last-search/LastSearch';
import MyFavPlayers from './screens/my-fav-players/MyFavPlayers';
import Checkout from './screens/checkout/Checkout';
import MyTeams from './screens/my-teams/MyTeams';
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
import Profile from './screens/profile/Profile';
import MessageDetail from './screens/message-detail/MessageDetail';
import TeamMessage from './screens/team-message-detail/TeamMessage';
import MatchMessage from './screens/match-message-detail/MatchMessage';
import NotificationDetail from './screens/notification-detail/NotificationDetail';
import Notifications from './screens/notifications/Notifications';
import MatchDetail from './components/card-details/match-detail/MatchDetail';
import Tournaments from './screens/tournaments/Tournaments';
import TrainerDetail from './components/card-details/trainer-detail/TrainerDetail';
import CreateTeam from './screens/create/create-team/CreateTeam';
import ProfileEdit from './screens/profile/ProfileEdit';
import CreateCourt from './screens/create/create-court/CreateCourt';
import CreateTournament from './screens/create/create-tournament/CreateTournament';
import Matches from './screens/matches/Matches';
import { ToastContainer } from 'react-toastify';
import TournamentDetail from './components/card-details/tournament-detail/TournamentDetail';
import CreateMatch from './screens/create/create-match/CreateMatch';
import Watch from './screens/watch/Watch';
import Sponsors from './screens/sponsors/Sponsors';
import MyFavTrainers from './screens/my-fav-trainers/MyFavTrainers';
import MyTrainers from './screens/my-trainers/MyTrainers';
import CourtListMap from './screens/courts/court-list-map/CourtListMap';
import MatchRequestResult from './screens/profile/partials/match-request-result/MatchRequestResult';
import CreateSubscription from './screens/create/create-subscription/CreateSubscription';
import CreateTraining from './screens/create/create-training/CreateTraining';
import AllStar from './screens/all-star/AllStar';
import TrainerSendOffer from './screens/trainer-send-offer/TrainerSendOffer';
import Trainings from './screens/trainings/Trainings';
import Coaches from './screens/coaches/Coaches';
import Managers from './screens/managers/Managers';
import CoachDetail from './components/card-details/coach-detail/CoachDetail';
import ManagerDetail from './components/card-details/manager-detail/ManagerDetail';
import ProfileSettings from './screens/profile/settings/ProfileSettings';
import CourtComments from './screens/comments/court-comments/CourtComments';
import ManagerComments from './screens/comments/manager-comments/ManagerComments';
import TrainerComments from './screens/comments/trainer-comments/TrainerComments';
import SeeMorePlayers from './components/suggestions/players/SeeMorePlayers';
import SeeMoreTeams from './components/suggestions/teams/SeeMoreTeams';
import AllStarDetail from './components/card-details/all-star-detail/AllStarDetail';
import SeeMoreCoaches from './components/suggestions/coaches/SeeMoreCoaches';
import SeeMoreCourts from './components/suggestions/courts/SeeMoreCourts';
import SeeMoreMatches from './components/suggestions/matches/SeeMoreMatches';
import SeeMoreManagers from './components/suggestions/managers/SeeMoreManagers';
import SeeMoreTournaments from './components/suggestions/tournaments/SeeMoreTournaments';
import SeeMoreTrainings from './components/suggestions/trainings/SeeMoreTrainings';
import SeeMoreTrainers from './components/suggestions/trainers/SeeMoreTrainers';

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
                              <Route path="/trainings" component={Trainings} />
                              <Route path="/match-detail" component={MatchDetail} />
                              <Route path="/ended-match-detail" component={EndedMatch} />
                              <Route path="/favourite-players" component={MyFavPlayers} />
                              <Route path="/favourite-trainers" component={MyFavTrainers} />
                              <Route path="/player-detail" component={PlayerDetail} />
                              <Route path="/favourite-courts" component={MyFavCourts} />
                              <Route path="/courts-map" component={CourtListMap} />
                              <Route path="/court-detail" component={CourtDetail} />
                              <Route path="/last-search" component={LastSearch} />
                              <Route path="/coaches" component={Coaches} />
                              <Route path="/managers" component={Managers} />
                              <Route path="/tournaments" component={Tournaments} />
                              <Route path="/all-star" component={AllStar} />
                              <Route path="/my-teams" component={MyTeams} />
                              <Route path="/my-team-detail" component={MyTeamDetail} />
                              <Route path="/team-detail" component={TeamDetail} />
                              <Route path="/trainer-detail" component={TrainerDetail} />
                              <Route path="/coach-detail" component={CoachDetail} />
                              <Route path="/manager-detail" component={ManagerDetail} />
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
                              <Route path="/profile-settings" component={ProfileSettings} />
                              <Route path="/message-detail" component={MessageDetail} />
                              <Route path="/team-chat" component={TeamMessage} />
                              <Route path="/match-chat" component={MatchMessage} />
                              <Route path="/notifications" component={Notifications} />
                              <Route path="/notification-detail" component={NotificationDetail} />
                              <Route path="/all-star-detail" component={AllStarDetail} />
                              <Route path="/create-team" component={CreateTeam} />
                              <Route path="/create-court" component={CreateCourt} />
                              <Route path="/create-training-event" component={CreateTraining} />
                              <Route path="/create-tournament" component={CreateTournament} />
                              <Route path="/create-match-event" component={CreateMatch} />
                              <Route path="/create-subscription" component={CreateSubscription} />
                              <Route path="/court-comments" component={CourtComments} />
                              <Route path="/manager-comments" component={ManagerComments} />
                              <Route path="/trainer-comments" component={TrainerComments} />
                              <Route path="/watch" component={Watch} />
                              <Route path="/checkout" component={Checkout} />
                              <Route path="/match-request-result" component={MatchRequestResult} />
                              <Route path="/trainer-offer" component={TrainerSendOffer} />

                              {/* Profile */}
                              {/* Player */}
                              {/* Team */}
                              {/* Court */}
                              {/* Match */}
                              {/* Trainer */}
                              {/* Training */}
                              {/* Trainer */}
                              {/* Tournament */}
                              {/* All-Star */}

                              {/* Suggestion */}

                              <Route path="/suggestion-players" component={SeeMorePlayers} />
                              <Route path="/suggestion-teams" component={SeeMoreTeams} />
                              <Route path="/suggestion-coaches" component={SeeMoreCoaches} />
                              <Route path="/suggestion-matches" component={SeeMoreMatches} />
                              <Route path="/suggestion-courts" component={SeeMoreCourts} />
                              <Route path="/suggestion-managers" component={SeeMoreManagers} />
                              <Route path="/suggestion-trainers" component={SeeMoreTrainers} />
                              <Route path="/suggestion-trainings" component={SeeMoreTrainings} />
                              <Route path="/suggestion-tournaments" component={SeeMoreTournaments} />
                          </Switch>
                          </div>
                    </div>
                </div>
          </Router>
    </>
  );
}

export default App;
