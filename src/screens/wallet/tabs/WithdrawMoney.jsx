import { GiPayMoney } from "@react-icons/all-files/gi/GiPayMoney"

const WithdrawMoney = () => {
    return (
        <div className="row m-3">
        <div className="col-md-4 col-12 my-2 ">
            <label htmlFor="" className="my-2">Name*</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 col-12 my-2">
            <label htmlFor="" className="my-2">Surname*</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col-md-4 col-12 my-2">
            <div className="d-flex">
                <div >
                    <label htmlFor="" className="my-2">Amount*</label>
                    <input type="number" className="form-control w-75  mx-2" placeholder="00" />
                </div>
                <div >
                    <label htmlFor="" className="my-2">Cent*</label>
                    <input type="number" className="form-control w-50  mx-2" placeholder="00" />
                </div>
            </div>
        </div>
        <div className="col-md-6 col-12 my-2">
            <label htmlFor="" className="my-2">Customer Number*</label>
            <input type="text" className="form-control w-75" />
        </div>
        <div className="col-md-6 col-12 my-2">
            <label htmlFor="" className="my-2">Email*</label>
            <input type="email" className="form-control w-75" />
        </div>
        <div className="col-md-12 col-12 my-2">
            <label htmlFor="" className="my-2">Note</label>
            <textarea className="form-control" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="col-md-3 col-3 mt-5 m-auto">
            <button className="btn btn-lg btn-success">Send <GiPayMoney /></button>
        </div>
    </div>
    )
}

export default WithdrawMoney
