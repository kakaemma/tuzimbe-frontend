import { Link } from "react-router-dom";


const AddMaterialDetailsForm=(props)=>{
    const {  onChange, handleSubmit } =props
    return(
        <div className="container-fluid">
        <div className="container panel-container-margin-top">
            <div className="row">
                <div className="col-9">
                    <div className="panel tuzimbe-panel">
                        <div className="panel-heading">
                            <h2 className="title">Add Daily Material Details</h2>
                        </div>
                        <div className="panel-body">
        <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mr-3">
             <select name="material_type" required={true} onChange={onChange} className="form-control">
                <option>Select material</option>
                <option>sand</option>
                <option>cement</option>
                <option>bricks</option>
                <option>nails</option>
                <option>water</option>
                <option>stone aggregates</option>
            </select>
        </div>

        <br></br>

        <div className="form-group mr-3">
            <input
                type="text" className="form-control"
                name="quantity" id="quantity"
                onChange={onChange}
                required={true}
                title="Quantity"
                placeholder="Quantity"/>
        </div>
        <div className="form-group mr-3">
            <input
                type="text" className="form-control"
                name="unit_price" id="unit_price"
                onChange={onChange}
                required={true}
                title="Unit Price"
                placeholder="Unit price"/>
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

export default AddMaterialDetailsForm;
