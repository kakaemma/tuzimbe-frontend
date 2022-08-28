import React,{Component} from "react";
import { Link } from "react-router-dom";

class Home extends Component{

    render(){
        return(
            <div className="container-fluid">
            <div className="container panel-container">
                <div className="row">
                    <div className="col-8">
                        <div className="panel tuzimbe-panel">
                            <div className="panel-heading">
                                <h2 className="title">Welcome to Tuzimbe</h2>
                            </div>
                            <div className="panel-body">
                                <Link to="/users">Add Users</Link> |  <Link to="worker/details">Add Daily Work Details</Link> | <Link to="/materials">Add Material Details</Link> | <Link to="/owner/materials">View Material Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home