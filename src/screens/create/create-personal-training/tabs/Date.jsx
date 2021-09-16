import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const Date = () => {
    
    const options = [
        { label: "Monday", value: "grapes" },
        { label: "Tuesday", value: "mango" },
        { label: "Wednesday", value: "strawberry", disabled: true },
        { label: "Thursday", value: "watermelon" },
        { label: "Friday", value: "pear" },
        { label: "Saturday", value: "apple" },
        { label: "Sunday 🍊", value: "tangerine" },
      ];
    const [selected, setSelected] = useState([]);

    return (
        <div className="row">
        <div className="col-md-9 m-auto mb-4">
            <h6 className="text-center">Please pick days</h6>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select" className="w-50 m-auto"
            />
        </div>
        <div className="col-md-6 p-3">
            <h6 className="text-center">Date Between</h6>
            <div className="form-group">
                <h6>Select Start Date</h6>
                <input type="date" className="form-control" />
            </div>
            <div className="form-group">
                <h6>Select End Date</h6>
                <input type="date" className="form-control" />
            </div>
        </div>
        <div className="col-md-6 m-auto p-3">
            <h6 className="text-center">Hour Between</h6>
            <div className="form-group">
                <h6 >Beginning Hour</h6>
                <input type="time" className="form-control" />
            </div>
            <div className="form-group">
                <h6 >Ending Hour</h6>
                <input type="time" className="form-control" />
            </div>
        </div>
    </div>
    )
}

export default Date
