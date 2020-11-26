import React,{ Component }  from 'react';
import EditableTable from './table'


export default class Network01 extends Component{
  constructor(props){
    super(props)

    this.state={
      originData:[{
        key:'01',
        index:'1',
        IP:'255.255.255.255',
        port:'1',
        slaveId:'123',
        funcCode:'Read Coils',
        Addre:'24',
        mappinAddre:'1',
        number:'19200',
        timeout:'320',
        netport:'Port1'
      
    },{
      key:'02',
      index:'2',
      IP:'255.255.255.255',
      port:'1',
      slaveId:'123',
      funcCode:'Read Coils',
      Addre:'24',
      mappinAddre:'1',
      number:'19200',
      timeout:'320',
      netport:'Port2'
  },{
    key:'023',
    index:'3',
    IP:'255.255.255.255',
    port:'12',
    slaveId:'123',
    funcCode:'Read Coils',
    Addre:'24',
    mappinAddre:'1',
    number:'19200',
    timeout:'320',
    netport:'Port1'
},

      ]
    }
  }
    render(){

        return(
            <EditableTable originData={this.state.originData} />
           
        )
    }
   
}