import Coaches from './../../screens/coaches/Coaches';
import CoachDetail from './../../components/card-details/coach-detail/CoachDetail';

import {
    Route,
  } from "react-router-dom";
  
const coachRoutes = [
            <Route path="/coaches" component={Coaches} />,
            <Route path="/coach-detail" component={CoachDetail} />
        ]

export default coachRoutes
