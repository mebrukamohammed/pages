import {useState ,useEffect} from 'react'

function Clock(){
 const [time ,setTime] =useState(new Date());
    useEffect(()=>{
        const interval= setInterval(()=>{
         setTime(new Date())
        },1000)
        return()=> clearInterval(interval)
    } ,[])




    return(
        <p>{String(time.getHours()).padStart("2","0")}:{String(time.getMinutes()).padStart(2,"0")}:{String(time.getSeconds()).padStart(2,"0")}</p>
    )
}
export default Clock