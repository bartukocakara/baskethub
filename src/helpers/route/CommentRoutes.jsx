import CourtComments from './screens/comments/court-comments/CourtComments';
import ManagerComments from './screens/comments/manager-comments/ManagerComments';
import TrainerComments from './screens/comments/trainer-comments/TrainerComments';

const CommentRoutes = () => {
    return (
        <>
            <Route path="/court-comments" component={CourtComments} />
            <Route path="/manager-comments" component={ManagerComments} />
            <Route path="/trainer-comments" component={TrainerComments} /> 
        </>
    )
}

export default CommentRoutes
