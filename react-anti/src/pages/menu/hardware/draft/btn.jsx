import React,{ Component }  from 'react';
import { Button,Space } from 'antd';
import Display from './display';
// import Ai from './ai';
// import Ao from './ao';


export default class Btn extends Component{
    constructor(props){
        super(props)

        this.state = {
            list:[]
        }
    }
    
    cpuClick =() => {
        console.log('cpucpucpucpu')
        let data = this.state.list
        console.log(data)
        this.setState({list:[...data,'cpu']})
    }

    aiClick = () => {
        console.log('aiaiaiai')
        let data = this.state.list
        console.log(data)
        this.setState({list:[...data,'ai']})
    }

    aoClick =() => {
        console.log('aoaoaoao')
        let data = this.state.list
        console.log(data)
        this.setState({list:[...data,'ao']})
    }
    remove =() => {
        console.log('removeremove')
        let data = this.state.list
        data.pop()
        console.log('removeremove',data)
        this.setState({list:[...data]})
    }
    removeAll =() => {

        this.setState({list:[]})
    }
    
    render(){
        return(
            <div>
                <div>
                    <Space style={{marginLeft:'60%',marginTop:'5px'}}>
                        <Button onClick ={this.cpuClick} >CPU</Button>
                        <Button onClick ={this.aiClick} >AI</Button>
                        <Button onClick ={this.aoClick} >AO</Button>
                        <Button danger onClick ={this.remove}>移除最后一项</Button>
                        <Button danger onClick ={this.removeAll}>清空</Button>
                    </Space>
                </div>
                <div style={{Display:'flex'}}>
                    <Display list={this.state.list} />

                </div>
                
            </div>
              
        )
    }

    
}
