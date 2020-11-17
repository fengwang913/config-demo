import React,{ Component }  from 'react';
import Network1 from './network1';
import Network2 from './network2';



export default class ModTCP extends Component{
    render(){

        return(
            <div>
                <Network1 />
                <Network2 />
            </div>
            
        )
    }

    
}