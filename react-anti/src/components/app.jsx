import React,{ Component }  from 'react';

import SiderDemo from '../pages/base/layout'
import Header from '../pages/base/header';



export default class App extends Component{
 
    render(){
        return(
            <div id='app'>
                <Header />
                <SiderDemo></SiderDemo>   
            </div>
        )
    }


}

