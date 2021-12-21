import React,{useState,useEffect} from 'react'

const BasicUseEffect = () => {
    const [cnt,setCnt] = useState(0)
    const [item,setItem] = useState('')
    useEffect(()=> {
        console.log("useEffect invoked")
    },[cnt])

    return (
        <div>
            <button onClick={()=> setCnt(prevCnt=>prevCnt+1)}>Click {cnt}</button>
            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>          
        </div>
    )
}

export default BasicUseEffect
