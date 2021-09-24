import TrainerDetail from './../../components/card-details/trainer-detail/TrainerDetail';
import MyFavTrainers from './../../screens/my-fav-trainers/MyFavTrainers';
import MyTrainers from './../../screens/my-trainers/MyTrainers';

import {
    Route,
  } from "react-router-dom";
const trainerRoutes = [
            <Route path="/my-trainers" component={MyTrainers} />,
            <Route path="/favourite-trainers" component={MyFavTrainers} />,
            <Route path="/trainer-detail" component={TrainerDetail} />,
        ]

export default trainerRoutes
