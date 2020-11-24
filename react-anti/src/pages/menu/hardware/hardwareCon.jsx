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
            infoData:[{ 
                key:'01',
                index:1,
                SOE:'超上限',
                SOERange:'12',
                SOEUpper:'24',
                SOELower:'12',
                fault:'23'},
                { 
                key:'02',
                index:2,
                SOE:'超上限',
                SOERange:'12',
                SOEUpper:'24',
                SOELower:'12',
                fault:'23'}],
                
            
        }
        console.log('此时的currentInfo有没有得到更新呢？',this.state.currentInfo)
        console.log('此时的list有没有得到更新呢？',this.state.list)

        console.log('此时的infoData有没有得到更新呢？',this.state.infoData)

    }
    
    changeList =(e) =>{
        let oper = e.target.innerText
        let data = this.state.list
        let info = this.state.infoData
        let index = this.state.infoData.length;

        if(oper === 'CPU'){
            let cpuInfo = {
                key:index.toString(),
                index:index,
                SOE:'下降沿'
            }
            let show={
                CpuShow:'inline',
                AiShow:'none',
                AoShow:'none'
            }
    
            this.setState({list:[...data,'cpu'],infoData:[...info,cpuInfo],currentInfo:[cpuInfo]})
            this.setState({show:[show]})
 
        }
        if(oper === 'AI'){
            let aiInfo = {
                key:index.toString(),
                index:index,
                SOE:'超上限',
                SOERange:'7',
                SOEUpper:'28',
                SOELower:'21'
            }
            let show={
                CpuShow:'none',
                AiShow:'inline',
                AoShow:'none'
            }
            this.setState({list:[...data,'ai'],infoData:[...info,aiInfo],currentInfo:[aiInfo]})
            this.setState({show:[show]})
    
 

        }
        if(oper === 'AO'){
            let aoInfo = {
                key:index.toString(),
                index:index,
                SOE:'超上限',
                SOERange:'12',
                SOEUpper:'24',
                SOELower:'12',
                fault:'23'
    
            }
            let show={
                CpuShow:'none',
                AiShow:'none',
                AoShow:'inline'
            }
    
            this.setState({list:[...data,'ao'],infoData:[...info,aoInfo],currentInfo:[aoInfo]})
            this.setState({show:[show]})



        }
        if(oper === '移除最后一项'){
            console.log('removeremove')
            let data = this.state.list
            let info = this.state.infoData
            data.pop()
            info.pop()
            console.log('清除最近一项的info',info)
            console.log('removeremove',data)
            this.setState({list:[...data]})
            this.setState({infoData:[...info]})

        }
        if(oper === '清 空'){
            this.setState({list:[]})
            this.setState({infoData:[]})


        }

    }
    changeInfo = () => {
        console.log('在这里change info的值哦')
    }

    render(){

        return(
            <div style={{height:'83vh'}}>
               <div style={{height:'40%' ,backgroundColor:'white'}}>
                   <Draft list={this.state.list} changeList={this.changeList} info={this.state.infoData}/>

               </div>
               <div style={{height:'60%',backgroundColor:'white',marginTop:'10px'}}>
                   <Info info={this.state.currentInfo} show={this.state.show} />
               </div>
            </div>
        )
    }

    
}



