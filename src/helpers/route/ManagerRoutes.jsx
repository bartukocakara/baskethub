import Managers from './../../screens/managers/Managers';
import ManagerDetail from './../../components/card-details/manager-detail/ManagerDetail';
import {
    Route,
  } from "react-router-dom";
  
const managerRoutes = [
        <Route path="/managers" component={Managers} />,
        <Route path="/manager-detail" component={ManagerDetail} />

        ]

export default managerRoutes
