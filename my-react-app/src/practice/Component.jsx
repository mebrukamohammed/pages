import{useState,useContext ,useRef, useEffect} from 'react'

function Component(){
    /*const [breads ,setBread] =useState(["Difo","Mugera","Wollo Dabo","Anbasha"])

    function handleAddBread(){
        let newBread=document.getElementById("breadInput").value;
        document.getElementById("breadInput").value="";
        
        setBread((b)=>[...b,newBread])

    }
    function handleRemoveBread(index){
        setBread(breads.filter((_,i)=>i!==index))

    }*/

    
 /*const [name,setName]=useState("Guest");
 const [quantity, setQuantity]=useState(1);
 const [order ,setOrder]=useState("");
 const [payment,setPayment]=useState("");
 const [spot,setSpot]=useState("");



 const updateName=(e)=> 
    {setName(e.target.value)}
 const updateQuantity=(e)=>{
    setQuantity(e.target.value)}
    const updateOrder=(e)=>{
        setOrder(e.target.value)
    }
    const updatePayment=(e)=>{
        setPayment(e.target.value)
    }
    const updateSpot=(e)=>{
        setSpot(e.target.value)
    }


 

    return(
    <div>
        <input onChange={updateName} type="text"></input>
        <p> Name:{name}</p>
        <input value={quantity} onChange={updateQuantity} type="number"></input>
        <p> Quantity:{quantity}</p>
           <textarea value={order} onChange={updateOrder} type="text" placeholder="Place your order here"></textarea>
        <p>Order:{order}</p>
        <select value={payment} onChange={updatePayment}>
            <option value="Telebirr">TeleBirr</option>
              <option value="CBE">CBE</option>
                <option value="Abyssinia">Abyssiniar</option>
                  <option value="POS">POS</option>
        </select>
        <p> Payment:{payment}</p>
        <lable>
            <input type="radio" value="OutDoor" checked={spot==="OutDoor"} onChange={updateSpot}></input>
            OutDoor
        </lable>
          <lable>
            <input type="radio" value="InDoor" checked={spot==="InDoor"} onChange={updateSpot}></input>
            InDoor
        </lable>
        <p> Spot:{spot}</p>
        

    </div>
    /*<div>
        <p> Name:{name}</p>
        <button onClick={handleClick}> Set Name</button>
    </div>*/
    // adding an element to an array
    /*return(
        <div>
        <ul>
            {breads.map((bread,index)=><li key={index} onClick={()=>handleRemoveBread(index)}>
                {bread}
            </li>)}
        </ul>
        <input id="breadInput" placeholder='Enter bread variant'></input>
        <button onClick={handleAddBread}>Add Bread</button>

        </div>
    // modifying array of objects
    const [cars,setCars]=useState([{name:"",
        year:"",
        model:""
    }])
   function addCar(){
        let newName=document.getElementById("name");
        let newYear=document.getElementById("year");
        let newModel=document.getElementById("model");
        setCars((c)=>[...c,newName,newYear,newModel])
       

     

        
        }
   
    return(<div>
     
    <input value={cars.name} placeholder='insert car name' id="name" onChange={(e)=>setCars([{...cars,name:e.target.value}])}></input>
    <input value={cars.year} placeholder='insert car year' id="year" onChange={(e)=>setCars([{...cars,year:e.target.value}])}></input>
     <input value={cars.model} placeholder='insert car model' id="model" onChange={(e)=>setCars([{...cars,model:e.target.value}])}></input>
     <button onClick={addCar}>Add Car</button>
   
     </div>
       

    )
  /* const [cars,setCars]=useState([]);
   const [name ,setName]=useState("");
   const [year,setYear]=useState("");
   const [model ,setModel]=useState("");
   function updateName(){
    setName(()=>[...cars , cars] )
   }
}*/

/*const [cars ,setCars] =useState([]);
const [year ,setYear]=useState(new Date().getFullYear());
const [name,setName]=useState("");
const [model ,setModel]=useState("");
function handleAddCar(){
    const newCar={newYear:year,newName:name,newModel:model};
    setCars(c=>[...c,newCar])

}
function yearChange(event){
    setYear(event.target.value)
}
function modelChange(event){
    setModel(event.target.value)
}
function nameChange(event){
    setName(event.target.value)

}
function removeCar(index){
    setCars(c=> c.filter((_,i)=>i!==index))
}

return(  <div>
    
    <ul>
        {
            cars.map((car,index)=> <li key={index} onClick={()=>removeCar(index)}>
                {car.year} {car.name} {car.model}
            </li>)
        }

    </ul>
  
        <input type="number" value={year} onChange={yearChange}></input><br/>
        <input type="text" value={name} placeholder='Enter car name' onChange={nameChange}></input><br/>
        <input type="text" value={model} placeholder='Enter car model' onChange={modelChange}></input><br/>
        <button onClick={handleAddCar}> Add Car</button>
        <small> to remove a car list click on the list</small>

    </div>*/
   //const ref=useRef(); // with current object 
   const inputRef1=useRef(null)
    const inputRef2=useRef(null)
     const inputRef3=useRef(null)

    useEffect( ()=>{
   console.log("ComponentRendered")
   console.log(inputRef1)
      console.log(inputRef2)
         console.log(inputRef3)


    })

    
    function handleClick(){
         //ref.current=ref.current+1;
         inputRef1.current.focus();
         inputRef1.current.style.backgroundColor="yellow"
    }
    return(
        <div>
            <button onClick={handleClick}> Click me</button><br/>
            <input ref={inputRef1}></input><br/>
            <button onClick={handleClick}> Click me</button><br/>
            <input ref={inputRef2}></input> <br/>
            <button onClick={handleClick}> Click me</button><br/>
            <input ref={inputRef3}></input><br/>


        </div>
    )



    
    

}

    
    


export default Component