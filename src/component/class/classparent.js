import React,{Component} from 'react'
import Classchild from './classchild.js'
class Classparent extends Component{
    render(){
        const a="Reshmi"
        return(
            <div>
                <Classchild name={a}/>
            </div>
        )
    }
}

export default Classparent