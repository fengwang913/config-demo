import React from 'react';
import Cpu from './cpu';
import Ai from './ai';
import Ao from './ao';




const Display = (props) =>{
    console.log('Display的展示的数据呀',props)
    const data = [...props.list];
    console.log('datadatadata',data)
 return(
    data.map( (item) => {
        console.log('itemitem',item)
        
        if(item === 'cpu'){
            return(
                <Cpu />
            )
        }
        if(item === 'ai'){
            return(
                <Ai />
            )
        }
        if(item ==='ao'){
            return(
                <Ao />
            )
        }else{
            return null;
        }

    })
 )
    

}



export default Display;
