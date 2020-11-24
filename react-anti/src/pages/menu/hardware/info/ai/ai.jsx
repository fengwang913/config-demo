import React,{ Component }  from 'react';
import AiTab from './aiTab'


export default class Ai extends Component{
    constructor(props){
        super(props)
        console.log('现在的ai里面是什么呢？',props.info)
    }
    render(){
        const info = this.props.info
        console.log('我是aiaiaiaiaiaiaiaiai',info)

        return(
            <div>
               <AiTab info={info} />
            </div>
        )
    }

    
}