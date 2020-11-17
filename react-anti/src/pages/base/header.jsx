import React,{ Component } from 'react';

export default class Header extends Component{

 

    render(){
        return(
            <div style={ {
                width :'100vw',
                height:'6vh',
                fontSize:'25px',
                // textAlign:"center",
                backgroundColor:'black',
                color:'white',
            } }>
                配置信息
            </div>
        )
    }
}