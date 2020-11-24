import React from 'react';
import Cpu from './cpu';
import Ai from './ai';
import Ao from './ao';




const Display = (props) =>{
    console.log('Display的展示的数据呀',props)
    const data = [...props.list];
    const info = [...props.info]
    console.log('datadatadata',data)
    console.log('infoinfoinfo',info)
 return(
    data.map( (item,index) => {
        console.log('itemitem',item)
        
        if(item === 'cpu'){
            return(
                <Cpu key={index} />
            )
        }
        if(item === 'ai'){
            return(
                <Ai key={index}/>
            )
        }
        if(item ==='ao'){
            return(
                <Ao key={index}/>
            )
        }else{
            return null;
        }

    })
 )
    

}



export default Display;
