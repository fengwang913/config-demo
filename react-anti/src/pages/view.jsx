import React,{ Component }  from 'react';
import {BrowserRouter as Router ,Route ,Switch  } from 'react-router-dom';


import Home from './menu/home/home'
import Log from './menu/log'
import ModRTU from './menu/modrtu/modrtu'
import ModTCP from './menu/modtcp/modtcp'
import TermSer from './menu/term-serv'
import MQTT from './menu/mqtt'
import Zigbee from './menu/zigbee'
import DevRealS from './menu/device-real'
import Upgrade from './menu/Fireware/upgrade'
import HardwareCon from './menu/hardware/hardwareCon'




export default class View extends Component{
    constructor(props){
        super(props)
       this.state={
           history:''
       }
        console.log('11234s',this.props)
    }
    render(){
        return(
            <div id='view'>
                <Router>
                    <Switch>
                        <Route path='/' exact component={() =>{  return <Home  />}}></Route>
                        <Route path='/log' component={Log}></Route>
                        <Route path='/ModbusRTU-master'  component={ModRTU}></Route>
                        <Route path='/ModbusTCP-master' component={ModTCP}></Route>
                        <Route path='/termialserver'  component={TermSer}></Route>
                        <Route path='/mqtt' component={MQTT}></Route>
                        <Route path='/zigbee' component={Zigbee}></Route>
                        <Route path='/devicerealtime' component={DevRealS}></Route>
                        <Route path='/firmware'  component={Upgrade}></Route>
                        <Route path='/hardwareconfig' component={HardwareCon}></Route>
                        </Switch>
                </Router>  
            </div>
        )
    }


}

