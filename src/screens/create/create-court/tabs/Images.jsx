import React from 'react'

const Images = () => {
    return (
        <>
            <div className="form-group col-md-6 p-2 m-auto">
                <label for="helpInputTo" className="p-2">Court Images </label>
                <input type="file" className="form-control" id="helpInputTop" />
            </div>
            <div className="row my-3">
            {
                [...Array(5)].map(() => (
                    <div class="card col-md-4 ">
                        <div class=" border rounded text-center card-shadow">
                            <div class="w-100">
                                <img src="assets/images/samples/basket-salon2.jpg" className="w-100 rounded" alt="Face 1" />
                                
                            </div>
                        </div>
                    </div>
                ))
            
            }
            </div>
        </>
    )
}

export default Images
