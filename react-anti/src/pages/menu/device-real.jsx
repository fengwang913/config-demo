import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const DevRealS =() => {
  const [num,setNum] = useState(0)

  useEffect(() => {
     setInterval(() => {
      setNum(num+1)
    },6000)

    
  })
  

  return(
    <div style={{paddingBottom:'10px'}}>
      <div style={{fontSize:'20px'}} >
              设备实时信息
      </div>
      <div>
        <div style={{marginTop:'10px'}}>
          <Card title="DI 实时信息">
                  <Card.Grid style={gridStyle}> 通道 1
                                            <p> SOE事件： 上升沿</p>                        
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 
                                              通道 2
                                            <p> SOE事件： 上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 3
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 4
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 通道 5
                                            <p> SOE事件： 下降沿</p>                        
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 
                                              通道 6
                                            <p> SOE事件： 上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 7
                                            <p> SOE事件： 上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 8
                                            <p> SOE事件： 上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 通道 9
                                            <p> SOE事件： 下降沿</p>                        
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 
                                              通道 10
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 11
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 12
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
          </Card>
        </div>
        <div style={{marginTop:'20px'}}>
          <Card title="DO 实时信息">
                  <Card.Grid style={gridStyle}> 通道 1
                                            <p> SOE事件： 下降沿</p>                        
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 
                                              通道 2
                                            <p> SOE事件：上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 3
                                            <p> SOE事件： 上升沿</p> 
                  </Card.Grid>
                  <Card.Grid style={gridStyle}>通道 4
                                            <p> SOE事件： 下降沿</p> 
                  </Card.Grid>
          </Card>
        </div>
        <div style={{marginTop:'20px'}}>
          <Card title="AI 实时信息">
                  <Card.Grid style={gridStyle}> 
                                            <p>通道 1</p>
                                            <p> SOE事件： 超上限</p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}> 
                                            <p>通道 2</p>
                                            <p> SOE事件：超下限</p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}><p>通道 3</p>
                                            <p> SOE事件： 恢复 </p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}><p>通道 4</p>
                                            <p> SOE事件： 超上限</p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}><p>通道 5</p>
                                            <p> SOE事件：  恢复</p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
                  <Card.Grid style={gridStyle}><p>通道 6</p>
                                            <p> SOE事件：  超下限</p> 
                                            <p> SOE滞回区间： {num}</p>  
                                            <p> SOE上限： {num}</p>
                                            <p> SOE下限： {num}</p>
                  </Card.Grid>
            </Card>
        </div>
      </div>
    </div>
  )
} 
export default DevRealS 

