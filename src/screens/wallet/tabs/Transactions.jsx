const Transactions = () => {
    return (
        <div>
            <div className="row" id="table-hover-row">
                <div className="col-12">
                    <div className="card">
                        <div className="row m-3">
                            <div className="col-md-4 col-12">
                                <input type="search" className="form-control text-center" placeholder="quick search"/>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="table-responsive border rounded">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>NAME</th>
                                            <th>RATE</th>
                                            <th>SKILL</th>
                                            <th>TYPE</th>
                                            <th>LOCATION</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-bold-500">Michael Right</td>
                                            <td>$15/hr</td>
                                            <td className="text-bold-500">UI/UX</td>
                                            <td>Remote</td>
                                            <td>Austin,Taxes</td>
                                            <td><i className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">Morgan Vanblum</td>
                                            <td>$13/hr</td>
                                            <td className="text-bold-500">Graphic concepts</td>
                                            <td>Remote</td>
                                            <td>Shangai,China</td>
                                            <td><i className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">Tiffani Blogz</td>
                                            <td>$15/hr</td>
                                            <td className="text-bold-500">Animation</td>
                                            <td>Remote</td>
                                            <td>Austin,Texas</td>
                                            <td><i className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">Ashley Boul</td>
                                            <td>$15/hr</td>
                                            <td className="text-bold-500">Animation</td>
                                            <td>Remote</td>
                                            <td>Austin,Texas</td>
                                            <td><i className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></td>
                                        </tr>
                                        <tr>
                                            <td className="text-bold-500">Mikkey Mice</td>
                                            <td>$15/hr</td>
                                            <td className="text-bold-500">Animation</td>
                                            <td>Remote</td>
                                            <td>Austin,Texas</td>
                                            <td><i className="badge-circle badge-circle-light-secondary font-medium-1" data-feather="mail"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions
