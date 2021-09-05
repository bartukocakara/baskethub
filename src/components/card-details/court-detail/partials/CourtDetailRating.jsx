const CourtDetailRating = () => {
    return (
        <div className="col-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body text-center p-2">
                        <h4 class="card-title text-center ">Court Details</h4>
                        <hr />
                        <div class="card-body px-0 py-1">
                                <table class="table table-borderless">
                                    <tbody><tr>
                                        <td class="col-3">Hygiene:</td>
                                            <td class="col-6">
                                                <div class="progress progress-info">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        <td class="col-3 text-center">60%</td>
                                        </tr>
                                        <tr>
                                            <td class="col-3">Response:</td>
                                                <td class="col-6">
                                                    <div class="progress progress-success">
                                                        <div class="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            <td class="col-3 text-center">30%</td>
                                        </tr>
                                        <tr>
                                            <td class="col-3">Intensity:</td>
                                                <td class="col-6">
                                                    <div class="progress progress-danger">
                                                        <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            <td class="col-3 text-center">50%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h6>2.323 Players Voted</h6>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourtDetailRating
