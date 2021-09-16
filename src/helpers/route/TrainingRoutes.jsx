import TrainingDetail from './../../components/card-details/training-detail/TrainingDetail';
import Trainings from './../../screens/trainings/Trainings';
import {
    Route,
  } from "react-router-dom";
import TrainingSettings from '../../components/card-details/training-detail/settings/TrainingSettings';
const trainingRoutes = [
            <Route path="/training-detail" component={TrainingDetail} />,
            <Route path="/trainings" component={Trainings} />,
            <Route path="/training-settings" component={TrainingSettings} />
        ]

export default trainingRoutes
