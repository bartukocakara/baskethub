import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";

const Qualifications = () => {
    return (
        <div className="row">
        {
            [...Array(5)].map((property) => (
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="card border rounded">
                        <div className="card-body px-3 py-4-5 profile-widget">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="stats-icon purple">
                                        <AiFillEye style={{ color:"#fff", fontSize:"30px", }}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="text-muted font-semibold">Court Views</h6>
                                    <h6 className="font-extrabold mb-0">112.000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        <ul>
            <li>parquet slickness</li>
            <li>ball quality</li>
            <li>ball quantity</li>
            <li>basket quality</li>
            <li>clock status</li>
            <li>shower enclosures</li>
            <li>buffet status</li>
            <li>changing rooms</li>
            <li>parking ride</li>
            <li>basket height</li>
            <li>field length</li>
            <li>basket height</li>
            <li>personal number</li>
            <li>emergency kit</li>
            <li>cleaning the court items</li>
            <li>rental shoes status</li>
        </ul>
        
    </div>
    )
}

export default Qualifications
