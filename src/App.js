import './_app.scss';

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import LastActivities from './components/screens/last-activities/LastActivities';
import MyMatches from './components/screens/my-matches/MyMatches';
// import Widgets from './components/layouts/widgets/Widgets';
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
import Trainers from './components/screens/trainer-search/Trainers';
import Tournaments from './components/screens/tournaments/Tournaments';
import TrainerDetail from './components/card-details/trainer-detail/TrainerDetail';
import CreateTeam from './components/screens/create/create-team/CreateTeam';
import ProfileEdit from './components/screens/profile/ProfileEdit';
import CreateCourt from './components/screens/create/create-court/CreateCourt';
import CreateTournament from './components/screens/create/create-tournament/CreateTournament';
import Matches from './components/screens/matches/Matches';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <>
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
                            <Route path="/match-detail" component={MatchDetail} />
                            <Route path="/ended-match-detail" component={EndedMatch} />
                            <Route path="/favourite-players" component={MyFavPlayers} />
                            <Route path="/trainers" component={Trainers} />
                            <Route path="/player-detail" component={PlayerDetail} />
                            <Route path="/favourite-courts" component={MyFavCourts} />
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
                            <Route path="/service-policies" component={ServicePolicies} />
                            <Route path="/about-us" component={About} />
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
                            <Route path="/create-tournament" component={CreateTournament} />
                            <Route path="/checkout" component={Checkout} />

                        </Switch>
        {/* ========== Without Widget Screens ========= */}
                    {/* PlayerDetail */}
                    {/* FavCourtDetail */}
                    {/* MatchDetail */}
                    {/* FavPlayerDetail */}
                    {/* MyProfile */}
                    {/* Contact */}
                    {/* Hizmet Şartları */}
                    {/* Gizlilik politikası */}
                    {/* Çerez Politikası */}
                    {/* Hakkımızda */}
                    {/* S.S.S */}

                </div>

        </div>
       

        </div>
        </Router>
    </>
  );
}

export default App;
