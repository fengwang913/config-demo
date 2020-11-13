import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import LeftBar from '../pages/base/leftbar';
import Header from '../pages/base/header';






export default class App extends Component{
    constructor(props){
        super(props)
    }
  
    render(){

        return(
            <div id='app'>
                <div>实验</div>
                <Header></Header>
                <div style={{display:"flex"}}>
                    <LeftBar></LeftBar>
                    <Router>
                        <Route path='/' exact component={() => (<h1>首页</h1>)}></Route>
                        <Route path='/Serial-port config' component={() => (<h1>Serial-port config</h1>)}></Route>
                        <Route path='/eth config' component={() => (<h1>eth config</h1>)}></Route>
                        <Route path='/log' component={() => (<h1>log</h1>)}></Route>
                        <Route path='/ModbusRTU-master'  component={() => (<h1>ModbusRTU-master</h1>)}></Route>
                        <Route path='/ModbusTCP-master' component={() => (<h1>ModbusTCP-master</h1>)}></Route>
                        <Route path='/termial server'  component={() => (<h1>termial server</h1>)}></Route>
                        <Route path='/mqtt' component={() => (<h1>mqtt</h1>)}></Route>
                        <Route path='/zigbee' component={() => (<h1>zigbee</h1>)}></Route>
                        <Route path='/device realtime' component={() => (<h1>device realtime</h1>)}></Route>
                        <Route path='/rts' exact component={() => (<h1>rts</h1>)}></Route>
                        <Route path='/ios' component={() => (<h1>ios</h1>)}></Route>
                        <Route path='/hardware config' component={() => (<h1>hardware config</h1>)}></Route>
                     </Router>
                </div>
                
            </div>
        )
    }


}

