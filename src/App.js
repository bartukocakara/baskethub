import './_app.scss';

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import MyMatches from './components/screens/my-matches/MyMatches';
// import Widgets from './components/layouts/widgets/Widgets';
import MyFavCourts from './components/screens/my-fav-courts/MyFavCourts';
import LastSearch from './components/screens/last-search/LastSearch';
import MyFavPlayers from './components/screens/my-fav-players/MyFavPlayers';
import MyTeams from './components/screens/my-teams/MyTeams';
import PlayerDetail from './components/card-details/player-detail/PlayerDetail';
import FavCourtDetail from './components/card-details/fav-court-detail/FavCourtDetail';
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
function App() {
  return (
      <>

        {/* navbar */}
        {/* searchbar */}
        <Router>
        <Sidebar />
        <div id="main" class='layout-navbar'>
        
            <Navbar />
            <div id="main-content" className="container main-section">
                <div className="row">
                        <Switch>
                            <Route exact path="/my-matches" component={MyMatches} />
                            <Route path="/match-detail" component={MatchDetail} />
                            <Route path="/ended-match-detail" component={EndedMatch} />
                            <Route path="/favourite-players" component={MyFavPlayers} />
                            <Route path="/trainers" component={Trainers} />
                            <Route path="/player-detail" component={PlayerDetail} />
                            <Route path="/favourite-courts" component={MyFavCourts} />
                            <Route path="/fav-court-detail" component={FavCourtDetail} />
                            <Route path="/last-search" component={LastSearch} />
                            <Route path="/my-teams" component={MyTeams} />
                            <Route path="/my-team-detail" component={MyTeamDetail} />
                            <Route path="/team-detail" component={TeamDetail} />
                            <Route path="/team/:name" component={MyTeamDetail} />
                            <Route path="/player-detail/:name" component={PlayerDetail} />
                            <Route path="/court-detail/:name" component={FavCourtDetail} />
                            <Route path="/service-policies" component={ServicePolicies} />
                            <Route path="/about-us" component={About} />
                            <Route path="/secure" component={Secure} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/cookies" component={Cookies} />
                            <Route path="/faq" component={Faq} />
                            <Route path="/my-profile" component={Profile} />
                            <Route path="/message-detail" component={MessageDetail} />
                            <Route path="/team-chat" component={TeamMessage} />
                            <Route path="/match-chat" component={MatchMessage} />
                            <Route path="/notifications" component={Notifications} />
                            <Route path="/notification-detail" component={NotificationDetail} />

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
