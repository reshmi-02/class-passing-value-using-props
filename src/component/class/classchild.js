import React,{Component} from "react";

class Classchild extends Component{
    render(){
        let value=this.props
        return(
            <div>
                <h1>Passing values using props in class component</h1>
                <h4>1)name</h4>
                <p>{value.name}</p>
            </div>
        )
    }
}

export default Classchild