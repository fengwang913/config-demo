import React,{ Component }  from 'react';
import aiURL from '../../../../assets/img/AI.png'


export default class Cpu extends Component{
    render(){

        return(
            <span>
               <img style={{width:'200px',height:'200px',marginTop:'63px'}} src={ aiURL }  />
            </span>
        )
    }

    
}