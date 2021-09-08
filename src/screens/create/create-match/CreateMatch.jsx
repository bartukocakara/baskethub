
import "./_createMatch.scss";
import CreateMatchNavs from './partials/CreateMatchNavs';
import CreateMatchOptions from "./partials/CreateMatchOptions";

const CreateMatch = () => {

    
    return (
        <>
            <h5 className="text-center screen-title">Create Match Event</h5>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <CreateMatchNavs />
                            <CreateMatchOptions />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateMatch
