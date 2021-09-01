import './_app.scss';
import "./_index.scss";

import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/layouts/navbar/Navbar";
import LastActivities from './screens/last-activities/LastActivities';
import LastSearch from './screens/last-search/LastSearch';
import Checkout from './screens/checkout/Checkout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import MessageDetail from './screens/messages/message-detail/MessageDetail';
import TeamMessage from './screens/messages/team-message-detail/TeamMessage';
import MatchMessage from './screens/messages/match-message-detail/MatchMessage';
import NotificationDetail from './screens/notification-detail/NotificationDetail';
import Notifications from './screens/notifications/Notifications';
import { ToastContainer } from 'react-toastify';
import Watch from './screens/watch/Watch';
import MatchRequestResult from './screens/profile/partials/match-request-result/MatchRequestResult';

import playerRoutes from './helpers/route/PlayerRoutes';
import allStarRoutes from './helpers/route/AllStarRoutes';
import matchRoutes from './helpers/route/MatchRoutes';
import trainerRoutes from './helpers/route/TrainerRoutes';
import teamRoutes from './helpers/route/TeamRoutes';
import trainingRoutes from './helpers/route/TrainingRoutes';
import infoRoutes from './helpers/route/InfoRoutes';
import suggestionRoutes from './helpers/route/SuggestionRoutes';
import tournamentRoutes from './helpers/route/TournamentRoutes';
import createRoutes from './helpers/route/CreateRoutes';
import profileRoutes from './helpers/route/ProfileRoutes';
import commentRoutes from './helpers/route/CommentRoutes';
import courtRoutes from './helpers/route/CourtRoutes';
import managerRoutes from './helpers/route/ManagerRoutes';
import prizeRoutes from './helpers/route/PrizeRoutes';
import coachRoutes from './helpers/route/CoachRoutes';

function App() {
  return (
      <>
          <ToastContainer autoClose={2000} toastClassName="dark-toast"/>
          <Router>
              <Sidebar />
                <div id="main" class='layout-navbar'>
                    <Navbar />
                    <div id="main-content" className="container main-section">
                      <div className="row">
                          <Switch>
                              {/* Main */}
                              <Route exact path="/" component={LastActivities} />
                              {playerRoutes}
                              {allStarRoutes}
                              {matchRoutes }
                              {trainerRoutes }
                              {teamRoutes } 
                              {coachRoutes } 
                              {trainingRoutes}
                              {infoRoutes }
                              {suggestionRoutes}
                              {tournamentRoutes }
                              {createRoutes }
                              {profileRoutes }
                              {commentRoutes }
                              {courtRoutes }
                              {managerRoutes }
                              {prizeRoutes}

                              {/* Other */}
                              <Route path="/last-search" component={LastSearch} />
                              <Route path="/player-chat" component={MessageDetail} />
                              <Route path="/team-chat" component={TeamMessage} />
                              <Route path="/match-chat" component={MatchMessage} />
                              <Route path="/notifications" component={Notifications} />
                              <Route path="/notification-detail" component={NotificationDetail} />
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
