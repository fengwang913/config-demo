import React,{ Component }  from 'react';
import aoURL from '../../../../assets/img/AO.png'


export default class Cpu extends Component{
    render(){

        return(
            <span >
               <img src={ aoURL } style={{width:'200px',height:'200px',marginTop:'63px'}}/>
            </span>
        )
    }

    
}
