import React,{ Component ,useState}  from 'react';
import { Table, Popconfirm, Form } from 'antd';
import { Select } from 'antd';

// const originData = [];

const { Option } = Select;
//原始数据而已
  const originData = [];
  originData.push({
      key:'01',
      ID:'1',
      deviType:'2',
      port:'1',
      baud:'19200',
      parity:'None',
      stop:'1',
      data:'7',
      type :'modbus-master' 
  },{
    key:'02',
    ID:'1',
    deviType:'2',
    port:'2',
    baud:'19200',
    parity:'None',
    stop:'1',
    data:'7',
    type :'modbus-master' 
},
{
    key:'03',
    ID:'1',
    deviType:'2',
    port:'3',
    baud:'19200',
    parity:'None',
    stop:'1',
    data:'7',
    type :'modbus-master' 
},
{
    key:'04',
    ID:'1',
    deviType:'2',
    port:'4',
    baud:'19200',
    parity:'None',
    stop:'1',
    data:'7',
    type :'modbus-master' 
},{
    key:'05',
    ID:'1',
    deviType:'2',
    port:'5',
    baud:'19200',
    parity:'None',
    stop:'1',
    data:'7',
    type :'modbus-master' 
})

// const SelectBaud =  <Select style={{ width: 80 }}>
//                         <Option value="19200"> 19200</Option>
//                         <Option value="115200"> 115200</Option>
//                     </Select>

// const SelectParity =  <Select style={{ width: 80 }}>
//                             <Option value="None"> None</Option>
//                             <Option value="Odd"> Odd</Option>
//                             <Option value="Even"> Even</Option>
//                      </Select>
// const SelectStop =  <Select style={{ width: 80 }}>
//                         <Option value="0"> 0</Option>
//                         <Option value="1"> 1</Option>
//                     </Select>
// const SelectData =  <Select style={{ width: 80 }}>
//                         <Option value="7"> 7</Option>
//                         <Option value="8"> 8</Option>
//                     </Select>

// const SelectType =  <Select style={{ width: 80 }}>
//                         <Option value="7"> 7</Option>
//                         <Option value="8"> 8</Option>
//                     </Select>   


//单元格的格式以及规则的限定
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
 
  const inputNode = (inputType === 'baud' ?  <Select style={{ width: 80 }}>
                                                <Option value="19200"> 19200</Option>
                                                <Option value="115200"> 115200</Option>
                                            </Select>
                    : (inputType === 'parity' ? <Select style={{ width: 80 }}>
                                                        <Option value="None"> None</Option>
                                                        <Option value="Odd"> Odd</Option>
                                                        <Option value="Even"> Even</Option>
                                                </Select>
                    :(inputType === 'stop'?<Select style={{ width: 50 }}>
                                                <Option value="0"> 0</Option>
                                                <Option value="1"> 1</Option>
                                            </Select>
                    :(inputType === 'data'? <Select style={{ width: 50}}>
                                                <Option value="7"> 7</Option>
                                                <Option value="8"> 8</Option>
                                            </Select>
                    :<Select style={{ width: 150 }}>
                        <Option value="modbus-master"> modbus-master</Option>
                        <Option value="modbus-slave"> modbus-slave</Option>
                     </Select>
                    )) ))


  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};


//
const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  console.log('此时的data是多少呢？',data)
  

  const isEditing = (record) => record.key === editingKey;

  console.log('此时的editingKey是多少呢？',editingKey)

  const edit = (record) => {
    form.setFieldsValue({
        ID:'',
        deviType:'',
        port:'',
        baud:'',
        parity:'',
        stop:'',
        data:'',
        type :'',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };


  //画table
  const columns = [
    {
      title: '设备信息',
      dataIndex: 'ID',
      width: '10%',
      editable: false,
    },
    {
      title: '设备类型',
      dataIndex: 'deviType',
      width: '10%',
      editable: false,
    },
    {
        title: '串口',
        dataIndex: 'port',
        width: '10%',
        editable: false,
      },
      {
        title: '波特率',
        dataIndex: 'baud',
        width: '10%',
        editable: true,
      },
      {
        title: '校验位',
        dataIndex: 'parity',
        width: '10%',
        editable: true,
      },
      {
        title: '停止位',
        dataIndex: 'stop',
        width: '10%',
        editable: true,
      },
    {
      title: '数据位',
      dataIndex: 'data',
      width: '10%',
      editable: true,
    },
    {
        title: '类型',
        dataIndex: 'type',
        width: '20%',
        editable: true,
      },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
            //   href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            编辑
          </a>
        );
      },
    },
  ];


  //循环遍历colums
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
  console.log('inputType: col.dataIndex,',col.dataIndex)
    return {
      ...col,
      onCell: (record) => ({
        record,
        // inputType: col.dataIndex === 'age' ? 'number' : 'text',
        inputType: col.dataIndex,

        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};


export default class Home extends Component{
    constructor(props){
        super(props)
        console.log('是在home页里面额',props)
    }
    render(){

        return(
            <EditableTable />
        )
    }

    
}