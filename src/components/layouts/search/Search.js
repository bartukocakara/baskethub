import React from 'react'

const Search = () => {
    return (
        <section id="main" className="form-search">
            {/* <div className="row match-height"> */}
                <div className="col-md-12 col-12">
                    <nav class="nav nav-pills flex-row flex-sm-row">
                        <a class="flex-sm-fill text-sm-center nav-link active" href="#">İstanbul</a>
                        <button type="button"
                            class="btn btn-light dropdown-toggle dropdown-toggle-split border"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            data-reference="parent">
                            <span class="sr-only">Diğer</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">İzmir</a>
                            <a class="dropdown-item" href="#">Ankara</a>
                            <a class="dropdown-item" href="#">Antalya</a>
                        </div>
                    </nav>
                </div>
            {/* </div> */}
        </section>
    )
}

export default Search
