import React,{ Component }  from 'react';
import AoTab from './aoTab'


export default class Ao extends Component{
    constructor(props){
        super(props)
        console.log('现在的ao里面是什么呢？',props.info)
    }

    render(){
        const info = this.props.info
        console.log('我是aoaoaoaoaooaoaoao',info)
        return(
            <div>
               <AoTab info={info}/>
            </div>
        )
    }

    
}
