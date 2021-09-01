import TrainingDetail from './../../components/card-details/training-detail/TrainingDetail';
import Trainings from './../../screens/trainings/Trainings';
import {
    Route,
  } from "react-router-dom";
const trainingRoutes = [
            <Route path="/training-detail" component={TrainingDetail} />,
            <Route path="/trainings" component={Trainings} />
        ]

export default trainingRoutes
