import React from 'react'

const MatchOptions = () => {
    return (
        <>
        
                <div class="card-body">
                    <ul class="list-group w-50 m-auto" id="widget-todo-list">
                    {
                    [...Array(5)].map((matchOption) => (
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." /> 
                            <span> Match Option 1(Saved request mathces)</span>
                            <span class="badge bg-warning badge-pill badge-round ml-1">8</span>
                        </li>
                        ))
                    }
                    </ul>
                    <div className=" w-100 text-center">
                        <input type="submit" className="btn btn-primary mt-3 fw-bold m-auto text-center w-25" value="Save changes"/>
                    </div>
                </div>
            
        </>
    )
}

export default MatchOptions
