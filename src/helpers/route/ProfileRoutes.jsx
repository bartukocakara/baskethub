import ProfileSettings from './../../screens/profile/settings/ProfileSettings';
import ProfileEdit from './../../screens/profile/ProfileEdit';
import Profile from './../../screens/profile/Profile';
import {
    Route,
  } from "react-router-dom";
const profileRoutes = [
            <Route path="/my-profile" component={Profile} />,
            <Route path="/profile-edit" component={ProfileEdit} />,
            <Route path="/profile-settings" component={ProfileSettings} />  
    ]

export default profileRoutes
