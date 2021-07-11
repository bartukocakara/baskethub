import React from 'react'

const MatchOptions = () => {
    return (
        <>
        
                <div class="card-body">
                    <ul class="list-group w-50 m-auto" id="widget-todo-list">
                    {
                    [...Array(5)].map((matchOption) => (
                        <li class="list-group-item d-flex justify-content-between border rounded align-items-center p-2 m-2">
                            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                            <div>
                                <span className="fw-bold"> Match Option 1(Saved request mathces)</span>
                                <p className="cut-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <span class="badge bg-warning badge-pill badge-round ml-1">8</span>
                        </li>
                        ))
                    }
                    </ul>
                    <div className=" w-100 text-center">
                        <input type="submit" className="btn btn-primary mt-3 fw-bold m-auto text-center w-25" value="Save changes"/><span className="text-danger m-2">(You can only have 5 options)</span>
                    </div>
                </div>
            
        </>
    )
}

export default MatchOptions
