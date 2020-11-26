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
      IP:'255.255.255.255',
      Gateway:'2',
      Mask:'1',
  },{
    key:'02',
    ID:'2',
    IP:'255.255.255.255',
    Gateway:'2',
    Mask:'1',
},
)

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
 
  const inputNode =  <Select style={{ width: 80 }}>
                                                <Option value="19200"> 19200</Option>
                                                <Option value="115200"> 115200</Option>
                     </Select>
                   


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
        IP:'',
        Gateway:'',
        Mask:'',
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
        title: '网口',
        dataIndex: 'ID',
        width: '20%',
        editable: false,
      },
    {
      title: 'IP',
      dataIndex: 'IP',
      width: '20%',
      editable: false,
    },
    {
      title: 'Gateway',
      dataIndex: 'Gateway',
      width: '20%',
      editable: false,
    },
    {
        title: 'Mask',
        dataIndex: 'Mask',
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
        pagination={false}
      />
    </Form>
  );
};


export default class NetworkCon extends Component{
    constructor(props){
        super(props)
        console.log('是在NetworkCon页里面额',props)
    }
    render(){

        return(
            <EditableTable />
        )
    }

    
}