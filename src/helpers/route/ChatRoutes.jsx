import CourtDetail from './../../components/card-details/court-detail/CourtDetail';
import MyFavCourts from './../../screens/my-fav-courts/MyFavCourts';
import TrainerComments from './../../screens/comments/trainer-comments/TrainerComments';
import CourtListMap from './../../screens/courts/court-list-map/CourtListMap';

import {
    Route,
  } from "react-router-dom";
const chatRoutes = [
        <Route path="/court-detail" component={CourtDetail} />,
        <Route path="/favourite-courts" component={MyFavCourts} />

        ]

export default chatRoutes
