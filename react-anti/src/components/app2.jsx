import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';
// import { hashHistory } from 'react-router'
import { createBrowserHistory } from "history";



import LeftBar from '../pages/base/leftbar';
import Header from '../pages/base/header';



import Home from '../pages/menu/home'
// import DeviceInfo from '../pages/menu/home1/devi-info'
// import SerPortC from '../pages/menu/home1/seria-conf'
// import EthConf from '../pages/menu/home1/eth-conf'

import Log from '../pages/menu/log'

import ModRTU from '../pages/menu/modrtu'
import ModTCP from '../pages/menu/modtcp'

import TermSer from '../pages/menu/term-serv'
import MQTT from '../pages/menu/mqtt'
import Zigbee from '../pages/menu/zigbee'
import DevRealS from '../pages/menu/device-real'

import RTS from '../pages/menu/Fireware/rts'
import IOS from '../pages/menu/Fireware/ios'
import HardwareCon from '../pages/menu/hardware-conf'





const customHistory = createBrowserHistory();



export default class App extends Component{
    constructor(props){
        super(props)
       this.state={
           history:''
       }
        console.log('11234s',this.props)
    }
  
    render(){

        return(
            <div id='app'>

                <Header></Header>
                <div style={{display:"flex",height:'100vh' }}>
                    <LeftBar ></LeftBar>
                    <Router history={customHistory}>
                        <Switch>
                            <Route path='/' exact component={() =>{  return <Home  />}}></Route>
                            {/* <Route path='/Serial-port config' component={SerPortC}></Route>
                            <Route path='/eth config' component={EthConf}></Route> */}

                            <Route path='/log' component={Log}></Route>

                            <Route path='/ModbusRTU-master'  component={ModRTU}></Route>
                            <Route path='/ModbusTCP-master' component={ModTCP}></Route>

                            <Route path='/termial server'  component={TermSer}></Route>
                            <Route path='/mqtt' component={MQTT}></Route>
                            <Route path='/zigbee' component={Zigbee}></Route>
                            <Route path='/device realtime' component={DevRealS}></Route>
                            <Route path='/rts'  component={RTS}></Route>
                            <Route path='/ios' component={IOS}></Route>
                            <Route path='/hardware config' component={HardwareCon}></Route>
                        </Switch>
                     </Router>

                </div>
                
            </div>
        )
    }


}

