import React,{ Component }  from 'react';
import CpuTab from './cpuTab'

export default class Cpu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const info = this.props.info
        console.log('我是CPUPUCPUCOCUCOCU',info)
        return(
            <div>
               <CpuTab info={info}/>
            </div>
        )
    }

    
}
