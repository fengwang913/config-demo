import React,{ Component }  from 'react';

// import NetSelect from './tabs'
import NetWork01 from './network1';



export default class ModTCP extends Component{
    render(){

        return(
            <div>
                <div style={{fontSize:'20px'}} >
                   ModTCP-Master
                </div>
                <NetWork01 />
            </div>
            
        )
    }

    
}