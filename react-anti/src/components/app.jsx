import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Link  } from 'react-router-dom';
// import { browserHistory } from 'react-router'
// import { browserHistory, Router, Route } from 'react-router'


import LeftBar from '../pages/base/leftbar';
import Header from '../pages/base/header';


import DeviceInfo from '../pages/menu/home/devi-info'
import SerPortC from '../pages/menu/home/seria-conf'
import EthConf from '../pages/menu/home/eth-conf'

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









export default class App extends Component{
    constructor(props){
        super(props)
       
        console.log('11234s',this.props)
    }
  
    render(){

        return(
            <div id='app'>

                <Header></Header>
                <div style={{display:"flex"}}>
                    <LeftBar></LeftBar>
                    <Router >
                        <Route path='/' exact component={DeviceInfo}></Route>
                        <Route path='/Serial-port config' component={SerPortC}></Route>
                        <Route path='/eth config' component={EthConf}></Route>

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
                     </Router>
                </div>
                
            </div>
        )
    }


}

