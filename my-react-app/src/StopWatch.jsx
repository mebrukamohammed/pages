import {useState, useRef, useEffect} from 'react'
function StopWatch(){
    const [isRunning ,setIsrunning] =useState(false);
    const intervalIdRef=useRef(null);
    let secondRef=useRef(0);
    let minuteRef=useRef(0);
    let HourRef=useRef(0);
    let [second,setSecond]=useState(0);
    let [minute,setMinute]=useState(0);
    let [hour ,setHour]=useState(0);

    useEffect(()=>{
         if(isRunning){
    intervalIdRef.current=setInterval(() =>{
        secondRef.current=secondRef.current+1;
      
        if(secondRef.current==60){
            secondRef.current=0;
            minuteRef.current=minuteRef.current+1;
           

           
        }
        if(minuteRef.current==60){
            minuteRef.current=0;
            HourRef.current=HourRef.current+1

        }
           setSecond(secondRef.current);
            setMinute(minuteRef.current);
            setHour(HourRef.current)

    },1000)}
    return()=>clearInterval(intervalIdRef.current)
    


         

    },[isRunning])



    function startCounter(){
        setIsrunning(true);
    }
    function stopCounter(){
        setIsrunning(false)
    }
    function resetCounter(){
      secondRef.current=0;
      minuteRef.current=0;
      HourRef.current=0;
        setSecond(0);
        setMinute(0);
        setHour(0);
        setIsrunning(false);
    }
 
     
    

    
   /* useEffect(()=> {
      if(isRunning){
    intervalIdRef.current=setInterval(() => {
        setelapsedTime(Date.now()- startTimeRef.current)
    },10);
      }
      console.log(Date.now())
      

    },[isRunning])
      
    function startCounter(){
        setIsrunning(true);
        startTimeRef.current= Date.now() -elapsedTime





    }*/

 return(
        <div className="container">
            <span className='watch'>{hour}:{minute}:{second}</span>
            <div className=" control-buttons">
                <button id="start" onClick={startCounter}> Start</button>
                <button id="stop" onClick={stopCounter}> Stop</button>
                 <button id="reset" onClick={resetCounter}>Reset</button>


            </div>

        </div>
    )

}
export default StopWatch;