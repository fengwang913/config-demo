import React,{ Component }  from 'react';
import IOS from './ios';
import RTS from './rts'

export default class Upgrade extends Component{
    render(){

        return(
            <div>
                <div style={{display:'flex' ,height:'80vh'}}>
                    <IOS />
                    <RTS />
                </div>
            </div>
        )
    }

    
}