import React from 'react'

const PlayerSearch = () => {
    return (
        <section id="main" className="form-search section">
            {/* <div className="row match-height"> */}
                <div className="col-md-12 col-12">
                    <nav className="nav nav-pills flex-row flex-sm-row">
                        <h4 className="flex-sm-fill   active" >İstanbul</h4>
                        <input className="form-control w-50" placeholder="Hızlı ara"  />
                    </nav>
                </div>
            {/* </div> */}
        </section>
    )
}

export default PlayerSearch
