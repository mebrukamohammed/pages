import {useState,useEffect} from 'react'
function ToDoList(){
const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
    const [taskDesc, settaskDesc]=useState("");

    function handleAddTask(){
       
        const newTask={
            task:taskDesc,}
    setTasks(t=>[...t ,newTask])
      settaskDesc("");
  
    }
    function TaskChange(event){
        settaskDesc(event.target.value);
 
        
    }
    function deleteTask(index){
        setTasks(t=>t.filter((_,i)=>i!==index))
    }
    function upTask(index){
        setTasks(t=> {

           const tasks= [...t]
            if(index==0){
                return tasks
              
            }

           let temp=tasks[index];
            tasks[index]=tasks[index-1]
            tasks[index-1]=temp;
              return tasks;
           
      })
  
    }
    function downTask(index){
        setTasks(t=>{
            const tasks=[...t]
            if(index==t.length-1){
                return tasks
            }
            let temp=tasks[index];
            tasks[index]=tasks[index+1]
            tasks[index+1]=temp
              return tasks;
        })
    }

    


    return(<div className='task-container'>
        <h1>To-Do-List</h1>
        <div className='input-add-field'>
        <input type="text" value={taskDesc} placeholder='Enter Task' onChange={TaskChange} ></input>
        <button onClick={handleAddTask} >Add</button>
        </div>

  
      {tasks.map((task,index)=> <div className='task-card' key={index}>
        <span className='task'>{task.task}</span>
        <div className='buttons'>
   <button className='delete' onClick={()=>deleteTask(index)}> Delete</button>
    <button className='up' onClick={()=>upTask(index)}>👆</button>
    <button  className="down" onClick={()=>downTask(index)}>👇</button>
     </div>
   </div>)}
   </div>
  

    )

}
export default ToDoList