import React,{ Component }  from 'react';
import EditableTable from './tables'



export default class Port01 extends Component{
  constructor(props){
    super(props)

    this.state = {
        originData:[{
        key:'01',
        index:'1',
        funcCode:'Read Coils',
        Addre:'24',
        mappinAddre:'1',
        number:'19200',
      
    },{
      key:'02',
      index:'2',
      funcCode:'Read Discreate Inputs',
      Addre:'56',
      mappinAddre:'1',
      number:'19200',
  },
  {
      key:'03',
      index:'3',
      funcCode:'Read Holding Registers',
      Addre:'23',
      mappinAddre:'1',
      number:'19200',
  },
  {
      key:'04',
      index:'4',
      funcCode:'Read Input Registers',
      Addre:'98',
      mappinAddre:'1',
      number:'19200',
  },{
    key:'05',
    index:'5',
    funcCode:'Read Holding Registers',
    Addre:'23',
    mappinAddre:'1',
    number:'19200',
    },
    {
        key:'06',
        index:'6',
        funcCode:'Read Input Registers',
        Addre:'98',
        mappinAddre:'1',
        number:'19200',
    },{
        key:'07',
        index:'1',
        funcCode:'Read Coils',
        Addre:'24',
        mappinAddre:'1',
        number:'19200',
    
    },{
    key:'08',
    index:'2',
    funcCode:'Read Discreate Inputs',
    Addre:'56',
    mappinAddre:'1',
    number:'19200',
    },
    {
    key:'09',
    index:'3',
    funcCode:'Read Holding Registers',
    Addre:'23',
    mappinAddre:'1',
    number:'19200',
    },
    {
    key:'10',
    index:'4',
    funcCode:'Read Input Registers',
    Addre:'98',
    mappinAddre:'1',
    number:'19200',
    },{
    key:'11',
    index:'5',
    funcCode:'Read Holding Registers',
    Addre:'23',
    mappinAddre:'1',
    number:'19200',
    },
    {
    key:'12',
    index:'6',
    funcCode:'Read Input Registers',
    Addre:'98',
    mappinAddre:'1',
    number:'19200',
    },{
    key:'13',
    index:'5',
    funcCode:'Read Holding Registers',
    Addre:'23',
    mappinAddre:'1',
    number:'19200',
    },
    {
    key:'14',
    index:'6',
    funcCode:'Read Input Registers',
    Addre:'98',
    mappinAddre:'1',
    number:'19200',
    },{
        key:'15',
        index:'5',
        funcCode:'Read Holding Registers',
        Addre:'23',
        mappinAddre:'1',
        number:'19200',
        },
        {
        key:'16',
        index:'6',
        funcCode:'Read Input Registers',
        Addre:'98',
        mappinAddre:'1',
        number:'19200',
        }]}
}

  render(){

      return(
          <div>
              <div style={{fontSize:'20px'}} >
                  串口 1
              </div>
              <EditableTable originData={this.state.originData} />
          </div>
      )
  }  
}

