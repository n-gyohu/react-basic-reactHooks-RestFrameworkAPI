import React,{useState,useEffect} from 'react'

const Timer = () => {

    const [cnt,setCnt] = useState(0)

    const time = () =>{
        setCnt(prevCnt => prevCnt+1)
    }
    useEffect(()=>{
        const interval = setInterval(time,1000)
        return () => {
            console.log(interval)
            clearInterval(interval)
            console.log("cleared")

        }
    },[])
    return (
        <div>
            {cnt}
        </div>
    )
}

export default Timer
