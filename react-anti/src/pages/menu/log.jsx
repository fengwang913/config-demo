import React,{ Component }  from 'react';
import { List, DatePicker,Button,Pagination   } from 'antd';
import { SearchOutlined } from '@ant-design/icons';




const { RangePicker } = DatePicker;

const data = [
  {
    index:'1',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'2',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'3',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'4',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  }
];


export default class Log extends Component{
    render(){

        return(
            <div>
              <div style={{float:'right',zIndex:1}} >
                <RangePicker style={{zIndex:1}} />
                <Button
                    type="primary"
                    style={{zIndex:2}}
                    onClick={()=>{console.log('111')}}
                    icon={<SearchOutlined />
                    
                    }
                  />
              </div>

              <div style={{backgroundColor:'white',paddingLeft:'10px'}} >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.desc}
                      />
                    </List.Item>
                  )}
                />
              </div>
              <div>
                <Pagination defaultCurrent={1} total={50} style={{float:'right'}}/>
              </div>
            </div>
        )
    }

    
}