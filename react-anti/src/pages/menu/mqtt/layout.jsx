import React from 'react';
import { Tabs} from 'antd';

import Info1 from './broker/info1'
import Info2 from './broker/info2'

const { TabPane } = Tabs;

export default class MqttLayout extends React.Component {

  render() {
    return (
      <>
        <Tabs tabPosition='left'>
          <TabPane tab="Broker 1" key="1">
            <Info1 />
          </TabPane>
          <TabPane tab="Broker 2" key="2">
            <Info2 />
          </TabPane>
        </Tabs>
      </>
    );
  }
}
