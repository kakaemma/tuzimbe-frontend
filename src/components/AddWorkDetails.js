import React,{Component} from "react";
import AddWorkDetailsForm from "./AddWorkDetailsForm";
import { registerWorker } from "../actions/userActions";
import { connect } from "react-redux";

class AddWorkDetails extends Component{
    constructor(props){
        super(props)
        this.state ={
            arrival_time: '',
            departure_time: '',
            daily_rate:  0,
            name:''
        }
    }

    onChange =event=>{
        const {name,value} = event.target
        this.setState({[name]:value})  
        console.log(this.state) 
    }
    handleSubmit = event=>{
        event.preventDefault()
        parseInt(this.state.daily_rate)
        const {arrival_time, departure_time, daily_rate, name} = this.state
        const userData = {
            arrival_time, 
            departure_time, 
            daily_rate: parseInt(daily_rate), 
            name }
        console.log(userData)
        const {registerWorker} = this.props
        registerWorker(userData)
    }

    render(){
        const {arrival_time, departure_time} =this.state
        return(
            <AddWorkDetailsForm handleSubmit={this.handleSubmit} departureTime={departure_time} arrivalTime={arrival_time} 
                onChange={this.onChange}/>

        )
    }
}
const mapStateToProps =state=>({
    ...state
})

export default connect(mapStateToProps,{registerWorker}) (AddWorkDetails)