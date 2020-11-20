import React,{ Component } from 'react';

export default class Header extends Component{

 

    render(){
        return(
            <div style={{display:'flex'}}>
                <div style={ {
                            width :'100vw',
                            height:'6vh',
                            fontSize:'25px',
                            // textAlign:"center",
                            backgroundColor:'#282c34',
                            color:'white',
                        } }>
                            <div style={{marginLeft:'10px'}}> 
                                配置信息
                            </div>
                          
                </div>
                <div style={ {
                        width :'100vw',
                        height:'6vh',
                        fontSize:'15px',
                        textAlign:"right",
                        backgroundColor:'#001529',
                        color:'white',
                        
                    } }>
                        <div style={{marginRight:'12px',marginTop:'5px'}}>
                        设备ID : 1234
                        </div>
                        <div style={{marginRight:'12px'}} >
                        设备类型 ：234
                        </div>
                     
            </div>
            </div>
        
        )
    }
}
