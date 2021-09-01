import AllStar from './../../screens/all-star/AllStar';
import AllStarDetail from './../../components/card-details/all-star-detail/AllStarDetail';
import {
    Route,
  } from "react-router-dom";
const allStarRoutes = [
            <Route path="/all-star" component={AllStar} />,
            <Route path="/all-star-detail" component={AllStarDetail} />

        ]

export default allStarRoutes
