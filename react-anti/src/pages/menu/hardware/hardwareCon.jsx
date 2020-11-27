import { List } from 'antd/lib/form/Form';
import React,{ Component }  from 'react';
import Draft from './draft/draft'
import Info from './info/info'



export default class TermSer extends Component{
    constructor(props){
        super(props)
        this.state={
            show:[
                {
                    CpuShow:'none',
                    AiShow:'none',
                    AoShow:'none',
                }

            ],
           
            currentInfo:[],
            list:[],
            infoData:[],
                
            
        }

    }

    // uploadList =(e) =>{
    //     let oper = e.target.innerText
    //     let data = this.state.list
    //     let info = this.state.infoData
    //     let index = this.state.infoData.length;

    //     if(oper === 'CPU'){
    //         let cpuInfo =[{
    //             key:index.toString(),
    //             index:1,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'2'),
    //             index:2,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'3'),
    //             index:3,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'4'),
    //             index:4,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'5'),
    //             index:5,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'6'),
    //             index:6,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'7'),
    //             index:7,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index.toString()+'8'),
    //             index:8,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+9).toString(),
    //             index:9,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+10).toString(),
    //             index:10,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+11).toString(),
    //             index:11,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+12).toString(),
    //             index:12,
    //             type:'DI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+13).toString(),
    //             index:1,
    //             type:'DO',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+14).toString(),
    //             index:2,
    //             type:'DO',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+15).toString(),
    //             index:3,
    //             type:'DO',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+16).toString(),
    //             index:4,
    //             type:'DO',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+17).toString(),
    //             index:1,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+18).toString(),
    //             index:2,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+19).toString(),
    //             index:3,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+20).toString(),
    //             index:4,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+21).toString(),
    //             index:5,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:(index+22).toString(),
    //             index:6,
    //             type:'AI',
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         }
    //     ]
    //         let show={
    //             CpuShow:'inline',
    //             AiShow:'none',
    //             AoShow:'none'
    //         }
    
    //         this.setState({list:[...data,'cpu'],infoData:[...info,cpuInfo],currentInfo:[...cpuInfo]})
    //         this.setState({show:[show]})
 
    //     }

    //     if(oper === 'AI'){
    //         let aiInfo = [{
    //             key:index.toString()+'1',
    //             index:1,
    //             SOE:'超上限',
    //             SOERange:'7',
    //             SOEUpper:'28',
    //             SOELower:'21'
    //         },{
    //             key:index.toString()+'2',
    //             index:2,
    //             SOE:'超下限',
    //             SOERange:'12',
    //             SOEUpper:'232',
    //             SOELower:'21'
    //         },{
    //             key:index.toString()+'3',
    //             index:3,
    //             SOE:' 恢复',
    //             SOERange:'87',
    //             SOEUpper:'65',
    //             SOELower:'21'
    //         },]
    //         let show={
    //             CpuShow:'none',
    //             AiShow:'inline',
    //             AoShow:'none'
    //         }
    //         this.setState({list:[...data,'ai'],infoData:[...info,aiInfo],currentInfo:[...aiInfo]})
    //         this.setState({show:[show]})
    
 

    //     }
    //     if(oper === 'AO'){
    //         let aoInfo = [{
    //             key:index.toString(),
    //             index:index,
    //             SOE:'超上限',
    //             SOERange:'12',
    //             SOEUpper:'24',
    //             SOELower:'12',
    //             fault:'23'
    //         }]
    //         let show={
    //             CpuShow:'none',
    //             AiShow:'none',
    //             AoShow:'inline'
    //         }
    
    //         this.setState({list:[...data,'ao'],infoData:[...info,aoInfo],currentInfo:[...aoInfo]})
    //         this.setState({show:[show]})



    //     }
    //     if(oper === '移除最后一项'){
    //         console.log('removeremove')
    //         let data = this.state.list
    //         let info = this.state.infoData
    //         data.pop()
    //         info.pop()
    //         console.log('清除最近一项的info',info)
    //         console.log('removeremove',data)
    //         this.setState({list:[...data]})
    //         this.setState({infoData:[...info]})

    //     }
    //     if(oper === '清 空'){
    //         this.setState({list:[]})
    //         this.setState({infoData:[]})


    //     }

    // }
    uploadList =() =>{
        let list = ['CPU','AO','AI']
        let info = this.state.infoData
        let currentD =[]
        
        list.map((item ) => {
            if(item === 'CPU'){
                let cpuInfo =[{
                    key:'1',
                    index:1,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'2',
                    index:2,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'3',
                    index:3,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'4',
                    index:4,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'5',
                    index:5,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'6',
                    index:6,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'7',
                    index:7,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'8',
                    index:8,
                    type:'DI',
                    SOE:'超上限',
                    time:'33 ms',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'9',
                    index:9,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'10',
                    index:10,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'11',
                    index:11,
                    type:'DI',
                    SOE:'超上限',
                    time:'33 ms',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'12',
                    index:12,
                    type:'DI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'13',
                    index:1,
                    type:'DO',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'14',
                    index:2,
                    type:'DO',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'15',
                    index:3,
                    type:'DO',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'16',
                    index:4,
                    type:'DO',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'17',
                    index:1,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'18',
                    index:2,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'19',
                    index:3,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'20',
                    index:4,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'21',
                    index:5,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'22',
                    index:6,
                    type:'AI',
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                }
            ]

           
                
            currentD.push(cpuInfo)
           
            }
            if(item === 'AO'){
                let aoInfo = [{
                    key:'23',
                    index:1,
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'12',
                    SOEUpper:'24',
                    SOELower:'12',
                    fault:'23'
                }]
                currentD.push(aoInfo)
            }
            if(item === 'AI'){
                let aiInfo = [{
                    key:'24',
                    index:1,
                    time:'33 ms',
                    SOE:'超上限',
                    SOERange:'7',
                    SOEUpper:'28',
                    SOELower:'21'
                },{
                    key:'25',
                    index:2,
                    time:'33 ms',
                    SOE:'超下限',
                    SOERange:'12',
                    SOEUpper:'232',
                    SOELower:'21'
                },{
                    key:'26',
                    index:3,
                    time:'33 ms',
                    SOE:' 恢复',
                    SOERange:'87',
                    SOEUpper:'65',
                    SOELower:'21'
                },]

                currentD.push(aiInfo)
            }
            
        })

        if(list[0] ==='CPU'){
            let show={
                CpuShow:'inline',
                AiShow:'none',
                AoShow:'none'
            }
            this.setState({show:[show]})

        }
        if(list[0] === 'AO'){
            let show={
                CpuShow:'none',
                AiShow:'none',
                AoShow:'inline'
            }
            this.setState({show:[show]})

        }
        if(List[0] === 'AI'){
            let show={
                CpuShow:'none',
                AiShow:'inline',
                AoShow:'none'
            }
            this.setState({show:[show]})   
        }
        let currentInfo =currentD[0]
        this.setState({currentInfo:[...currentInfo],list:[...list],infoData:[...info,...currentD]})







    }
    changeInfo = () => {
        console.log('在这里change info的值哦')
    }

    selectImg = (index,type) =>{
        
        let num = index.index

        if(type.type === 'CPU'){
            let selectInfo = this.state.infoData[num]
            let show={
                CpuShow:'inline',
                AiShow:'none',
                AoShow:'none'
            }

            this.setState({show:[show]})
            this.setState({currentInfo:[...selectInfo]})
        }
        if(type.type === 'AO'){
            let selectInfo = this.state.infoData[num]
            let show={
                CpuShow:'none',
                AiShow:'none',
                AoShow:'inline'
            }

            this.setState({show:[show]})
            this.setState({currentInfo:[...selectInfo]})

        }
        if(type.type === 'AI'){
            let selectInfo = this.state.infoData[num]
            let show={
                CpuShow:'none',
                AiShow:'inline',
                AoShow:'none'
            }

            this.setState({show:[show]})
            this.setState({currentInfo:[...selectInfo]})

        }


    }

    render(){

        return(
            <div style={{height:'83vh'}}>
               <div style={{height:'40%' ,backgroundColor:'white'}}>
                   <Draft list={this.state.list} 
                          uploadList={this.uploadList} 
                          info={this.state.infoData} 
                          selectImg={this.selectImg}/>

               </div>
               <div style={{minHeight:'60%',backgroundColor:'white',marginTop:'10px'}}>
                   <Info info={this.state.currentInfo} show={this.state.show} />
               </div>
            </div>
        )
    }

    
}



