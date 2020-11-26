import React,{ Component }  from 'react';
import CpuTab from './cpuTab'
import { Select,Button  } from 'antd';


const { Option } = Select;

export default class Cpu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const info = this.props.info

        return(
            <div style={{margin:'10px'}}>
                <div style={{fontSize:'22px'}}>
                    CPU配置信息
                </div>
                <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                    <span>
                        DI滤波次数:
                        <Select defaultValue="8" style={{ width: 100,marginLeft:'10px',marginRight:'10px' }} >
                            <Option value="8">8</Option>
                            <Option value="16">16</Option>
                            <Option value="32">32</Option>
                        </Select>
                    </span>
                    <span>
                        AI滤波时间:
                        <Select defaultValue="33" style={{ width: 100,marginLeft:'10px' }} >
                            <Option value="33">33ms</Option>
                            <Option value="23">23ms</Option>
                            <Option value="13">13ms</Option>
                            <Option value="43">43ms</Option>
                        </Select>
                        <Button style={{ marginLeft:'10px' }}>保存</Button>
                    </span>
                </div>
               <CpuTab info={info}/>
            </div>
        )
    }

    
}
