import React,{Component} from "react";
import AddMaterialDetailsForm from "./AddMaterialDetailsForm";
import { registerMaterial } from "../actions/materialActions";
import { connect } from "react-redux";

class AddMaterialDetails extends Component{
    constructor(props){
        super(props)
        this.state ={
            material_type: '',
            quantity: 0,
            unit_price:  0,
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
        const {material_type, quantity, unit_price, } = this.state
        const userData = {
            material_type, 
            quantity:parseInt(quantity), 
            unit_price: parseInt(unit_price), 
             }
        const {registerMaterial} = this.props
        registerMaterial(userData)
    }

    render(){
        return(
            <AddMaterialDetailsForm handleSubmit={this.handleSubmit} 
                onChange={this.onChange}/>

        )
    }
}
const mapStateToProps =state=>({
    ...state
})

export default connect(mapStateToProps,{registerMaterial}) (AddMaterialDetails)