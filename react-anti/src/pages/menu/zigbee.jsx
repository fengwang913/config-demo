import React,{ Component ,useState}  from 'react';
import { Table,InputNumber, Popconfirm, Button,Form } from 'antd';
import { Select } from 'antd';
const EditableContext = React.createContext();
// const originData = [];
const EditableRow = ({ index, ...props }) => {
  // console.log('此时此刻的我是谁呢',props)
  const [form] = Form.useForm();
  console.log('此时此刻的我是谁呢',form)
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const { Option } = Select;
//原始数据而已
  const originData = [];
  originData.push({
      key:'01',
      port:'1',
      funcCode:'Read Coils',
      Addre:'24',
      mappinAddre:'1',
      number:'19200',
    
  },{
    key:'02',
    port:'2',
    funcCode:'Read Discreate Inputs',
    Addre:'56',
    mappinAddre:'1',
    number:'19200',
},
{
    key:'03',
    port:'3',
    funcCode:'Read Holding Registers',
    Addre:'23',
    mappinAddre:'1',
    number:'19200',
},
{
    key:'04',
    port:'4',
    funcCode:'Read Input Registers',
    Addre:'98',
    mappinAddre:'1',
    number:'19200',
},{
    key:'05',
    port:'5',
    funcCode:'Write Coil',
    Addre:'200',
    mappinAddre:'1',
    number:'19200',
},{
    key:'06',
    port:'6',
    funcCode:'Write Coil',
    Addre:'200',
    mappinAddre:'1',
    number:'19200',
},
{
    key:'07',
    port:'7',
    funcCode:'Write Coil',
    Addre:'200',
    mappinAddre:'1',
    number:'19200',
})


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
 
  const inputNode =inputType === 'funcCode' ? <Select style={{ width: 180 }}>
                                                  <Option value="Read Coils"> Read Coils</Option>
                                                  <Option value="Read Discreate Inputs"> Read Discreate Inputs</Option>
                                                  <Option value="Read Holding Registers"> Read Holding Registers</Option>
                                                  <Option value="Read Input Registers"> Read Input Registers</Option>
                                                  <Option value="Write Coil"> Write Coil</Option>
                                                  <Option value="Write Register"> Write Register</Option>
                                                  <Option value="Write Coils"> Write Coils</Option>
                                                  <Option value="Write Registers"> Write Registers</Option>
                                              </Select> 
                                              :<InputNumber />;

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
const EditableTable = (props) => {
  const [form] = Form.useForm();
  const [data, setData] = useState(props.originData);
  const [editingKey, setEditingKey] = useState('');
  console.log('此时的data是多少呢？',data)
  

  const isEditing = (record) => record.key === editingKey;

  console.log('此时的editingKey是多少呢？',editingKey)

  const edit = (record) => {
    form.setFieldsValue({
      port:'',
      funcCode:'',
      Addre:'',
      mappinAddre:'',
      number:'',
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
      title: '串口',
      dataIndex: 'port',
      width: '10%',
      editable: false,
    },
    {
      title: '功能码',
      dataIndex: 'funcCode',
      width: '25%',
      editable: true,
    },
    
      {
        title: '地址',
        dataIndex: 'Addre',
        width: '15%',
        editable: true,
      },
      {
        title: '映射地址',
        dataIndex: 'mappinAddre',
        width: '15%',
        editable: true,
      },
      {
        title: '数量',
        dataIndex: 'number',
        width: '15%',
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
            <Popconfirm title="取消编辑？" onConfirm={cancel}>
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
  // console.log('inputType: col.dataIndex,',col.dataIndex)
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
  console.log('我来了我来了我来了我来了',data)
  console.log('我来了我来了我来了我来了',mergedColumns)
  console.log('我来了我来了我来了我来了')


  return (

    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            row: EditableRow,
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




export default class Zigbee extends Component{
    constructor(props){
        super(props)
        this.state={
            source : originData
        }
        console.log('this.state.sourcethis.state.source',this.state.source)
    }
    shouldComponentUpdate(nextProps,nextState){

        console.log('shouldComponentUpdateshouldComponentUpdate')
        return nextState.source !== this.state.source
    }
    handleChange = () => {
        console.log('Various parameters', 'wolaile');
    }

    handleAdd = () => {
        // const count = this.props.
        // const newData = {
        //   key: count,
        //   name: `Edward King ${count}`,
        //   age: 32,
        //   address: `London, Park Lane no. ${count}`,
        // };
        // this.setState({
        //   dataSource: [...dataSource, newData],
        //   count: count + 1,
        // });
        
        const count= (originData.length +1).toString();
        console.log('11111111111111111',count)
     
        originData.push({
            key: count,
            port:count,
            funcCode:'Read Coils',
            Addre:'24',
            mappinAddre:'1',
            number:'19200',
          });

          this.setState({
            source: [...originData],
           
          });
          console.log('222222222',this.state.source)
         
      };
       

      
    render(){
        let re = this.state.source
        console.log('rererererere',re)


        return(
            <div>
                <span style={{fontSize:'22px'}}>Test</span>
                <div>
                    <Button
                        onClick={this.handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                        }}
                        >
                         添加一行
                    </Button>
                    <EditableTable originData = {re} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }

    
}





