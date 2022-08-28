import React,{Component} from "react";
import { Link } from "react-router-dom";
import AddUserForm from "./AddUserForm";
import { registerUser } from "../actions/userActions";
import { connect } from "react-redux";

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            user_type:''
        }
    }

    onChange =event=>{
        const {name,value} = event.target
        this.setState({[name]:value})  
        console.log(this.state) 
    }
    handleSubmit = event=>{
        event.preventDefault()
        const {name, user_type} = this.state
        const userData = { name, user_type }
        const {registerUser} = this.props
        registerUser(userData)
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="container panel-container">
                <div className="row">
                    <div className="col-6">
                        <div className="panel tuzimbe-panel">
                            <div className="panel-heading">
                                <h2 className="title">Add User</h2>
                            </div>
                            <div className="panel-body">
                                <AddUserForm handleSubmit={this.handleSubmit} 
                                  onChange={this.onChange}/>

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
}
const mapStateToProps =state=>({
    ...state
})

export default connect(mapStateToProps,{registerUser}) (AddUser)