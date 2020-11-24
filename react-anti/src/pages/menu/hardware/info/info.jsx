import React,{ Component }  from 'react';


import Ai from './ai/ai'
import Ao from './ao/ao'
import Cpu from './cpu/cpu'






export default class Info extends Component{
    constructor(props){
        super(props)

        
    }
    render(){
        const info = [...this.props.info]
        console.log('infoinfoinfoinfoifno三生三世',info)

        const show = [...this.props.show];
        console.log('showshowshowshow',show)
        const Cpushow = show[0].CpuShow.toString();
        console.log('CpushowCpushowCpushow',Cpushow)
        const Aishow = show[0].AiShow;
        console.log('AishowAishowAishowAishow',Aishow)
        const Aoshow =show[0].AoShow;
        console.log('AoshowAoshowAoshowAoshow',Aoshow)
        const test = 'true'
        console.log('testtesttesttest',test)


        return(
            console.log('wollllll'),
            <div>
                <div  style={{display:Cpushow}}>
                    <Cpu info={info}/>

                </div>
                <div  style={{display:Aishow}}>
                    <Ai info={info}/>
                </div>
                <div  style={{display:Aoshow}}>
                    <Ao info={info}/>

                </div>
            </div>
            
        )
    }

    
}
