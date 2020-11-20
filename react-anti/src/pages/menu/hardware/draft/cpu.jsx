import React,{ Component }  from 'react';
import cpuURL from '../../../../assets/img/Cpu.png'




export default class Cpu extends Component{

    render(){


        return(
            <span >
               <img src={ cpuURL }  style={{width:'200px',height:'200px',marginTop:'63px'}} />

            </span>
        )
    }

 
}
