import CourtDetail from './../../components/card-details/court-detail/CourtDetail';
import MyFavCourts from './../../screens/my-fav-courts/MyFavCourts';
import CourtListMap from './../../screens/courts/court-list-map/CourtListMap';

import {
    Route,
  } from "react-router-dom";
const courtRoutes = [
        <Route path="/court-detail" component={CourtDetail} />,
        <Route path="/favourite-courts" component={MyFavCourts} />,
        <Route path="/courts-map" component={CourtListMap} />

        ]

export default courtRoutes
