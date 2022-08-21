import React,{Component} from "react";
import { Link } from "react-router-dom";

class Home extends Component{

    render(){
        return(
            <div class="container-fluid">
            <div class="container panel-container">
                <div class="row">
                    <div class="col-6">
                        <div class="panel tuzimbe-panel">
                            <div class="panel-heading">
                                <h2 class="title">Welcome to Tuzimbe</h2>
                            </div>
                            <div class="panel-body">
                                <Link to="/users">Add Users</Link> | <Link to="user/materials">Add Material Details</Link> | <Link to="/owner/materials">View Material Details</Link>
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