import CourtComments from './../../screens/comments/court-comments/CourtComments';
import ManagerComments from './../../screens/comments/manager-comments/ManagerComments';
import TrainerComments from './../../screens/comments/trainer-comments/TrainerComments';
import {
    Route,
  } from "react-router-dom";
const commentRoutes = [
            <Route path="/court-comments" component={CourtComments} />,
            <Route path="/manager-comments" component={ManagerComments} />,
            <Route path="/trainer-comments" component={TrainerComments} /> 
        ]

export default commentRoutes
