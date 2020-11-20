import React,{ Component }  from 'react';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 2',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 3',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 4',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 5',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 6',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 7',
    time:'2020-11-20',
    cont:'是我了啦',
  },
  {
    title: 'Title 8',
    time:'2020-11-20',
    cont:'是我了啦',
  },
];

export default class Log extends Component{
    render(){

        return(
            <div>
                  <List
                      itemLayout="horizontal"
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          {item.title}
                        </List.Item>
                      )}
                    />,
            </div>
        )
    }

    
}