import React,{ Component }  from 'react';
import { Button,Space } from 'antd';
import Display from './display';
// import Ai from './ai';
// import Ao from './ao';


export default class Btn extends Component{
    constructor(props){
        super(props)
        console.log('此时btn里面的props',props)
       
        this.state = {
            list:[],
            infoData:[]
        }
    }
  
    cpuClick =() => {
        let data = this.state.list
        let info = this.state.infoData

        let index = this.state.infoData.length;
        let cpuInfo = {
            key:index.toString(),
            index:index,
            SOE:'下降沿'
        }

        this.setState({list:[...data,'cpu'],infoData:[...info,cpuInfo]})
        console.log('此时的this.state.infoData',this.state.infoData)
        console.log('此时的this.state.list',this.state.list)

    }

    aiClick = () => {
        let data = this.state.list
        let info = this.state.infoData

        let index = this.state.infoData.length;
        let aiInfo = {
            key:index.toString(),
            index:index,
            SOE:'超上限',
            SOERange:'7',
            SOEUpper:'28',
            SOELower:'21'
        }
        this.setState({list:[...data,'ai'],infoData:[...info,aiInfo]})

        console.log('此时的this.state.infoData',this.state.infoData)

    }

    aoClick =() => {
        let data = this.state.list
        let info = this.state.infoData

        let index = this.state.infoData.length +1;
        let aoInfo = {
            key:index.toString(),
            index:index,
            SOE:'超上限',
            SOERange:'12',
            SOEUpper:'24',
            SOELower:'12',
            fault:'23'

        }

        this.setState({list:[...data,'ao'],infoData:[...info,aoInfo]})
        console.log('此时的this.state.infoData',this.state.infoData)

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
                        <Button onClick ={this.props.cpuInfo} >CPU</Button>
                        <Button onClick ={this.cpuClick} >CPU</Button>
                        <Button onClick ={this.aiClick} >AI</Button>
                        <Button onClick ={this.aoClick} >AO</Button>
                        <Button danger onClick ={this.remove}>移除最后一项</Button>
                        <Button danger onClick ={this.removeAll}>清空</Button>
                    </Space>
                </div>
                <div style={{Display:'flex'}}>
                    <Display list={this.state.list} changeInfo={this.props.cpuInfo}/>

                </div>
                
            </div>
              
        )
    }

    
}
