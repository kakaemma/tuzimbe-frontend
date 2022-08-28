import { Link } from "react-router-dom";


const AddWorkDetailsForm=(props)=>{
    const {  onChange, handleSubmit, arrival_time, departure_time } =props
    return(
        <div className="container-fluid">
        <div className="container panel-container-margin-top">
            <div className="row">
                <div className="col-12">
                    <div className="panel tuzimbe-panel">
                        <div className="panel-heading">
                            <h2 className="title">Add Daily Worker Details</h2>
                        </div>
                        <div className="panel-body">
        <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mr-3">
        <input
                type="text" className="form-control"
                name="name" id="name"
                onChange={onChange}
                required={true}
                title="Workers name"
                placeholder="Workers name"/>
        </div>

        <div className="form-group mr-3">
            <input
                type="text" className="form-control"
                name="arrival_time" id="arrival_time"
                onChange={onChange}
                required={true}
                title="Arrival Time (2022-10-10 10:10:00)"
                placeholder="Arrival Time (2022-10-10 10:10:00)"/>
           </div>

        <div className="form-group mr-3">
        <input
                type="text" className="form-control"
                name="departure_time" id="departure_time"
                onChange={onChange}
                required={true}
                title="Departure Time Time (2022-10-10 10:10:00)"
                placeholder="Departure Time (2022-10-10 10:10:00)"/>
        </div>
        <br></br>

        <div className="form-group mr-3">
            <input
                type="text" className="form-control"
                name="daily_rate" id="daily_rate"
                onChange={onChange}
                required={true}
                title="Daily Rate"
                placeholder="Daily Rate"/>
        </div>
        <div className="form-group mr-3">
            <button type="submit" className="btn btn-outline">Add Details</button>
        </div>
    </form>

    </div>
                            <div className="panel-footer">
                                <Link to="/">Home</Link> 
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AddWorkDetailsForm;