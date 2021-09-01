import AllStar from './screens/all-star/AllStar';
import AllStarDetail from './components/card-details/all-star-detail/AllStarDetail';

const AllStarRoutes = () => {
    return (
        <>
            <Route path="/all-star" component={AllStar} />
            <Route path="/all-star-detail" component={AllStarDetail} />

        </>
    )
}

export default AllStarRoutes
