import React,{ Component }  from 'react';
import Draft from './draft/draft'
import Info from './info/info'

export default class TermSer extends Component{
    render(){

        return(
            <div style={{height:'83vh'}}>
               <div style={{height:'40%' ,backgroundColor:'white'}}>
                   <Draft />

               </div>
               <div style={{height:'60%',backgroundColor:'white',marginTop:'10px'}}>
                   <Info />
               </div>
            </div>
        )
    }

    
}



