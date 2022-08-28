const AddUserForm=(props)=>{
    const {  onChange, handleSubmit} =props
    return(
        <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mr-3">
            <input
                type="text" className="form-control"
                name="name" id="name"
                onChange={onChange}
                required={true}
                title="Enter user's name"
                placeholder="Name"/>
        </div>
        <div className="form-group mr-3">
             <select name="user_type" required={true} onChange={onChange} className="form-control">
                <option>User Type</option>
                <option>Worker</option>
                <option>Owner</option>
            </select>
        </div>
        <button type="submit" className="btn btn-outline">Add user</button>

    </form>
    )
}

export default AddUserForm;