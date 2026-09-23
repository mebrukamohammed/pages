function Button(){
    let count=0;
    const imageUrl='./src/assets/me.jpg';
 const handleClick=(e)=>e.target.style.width="800px" 

   /* if(count<3){
        console.log(`${name} is cliking me${count} times.`)
        }
        else{
            console.log("stop clicking me bastard!")
        }
    count++}
    
    return(<button onClick={()=>handleClick("mebuye")}>Click Me</button>)*/
   return(<img src={imageUrl} onClick={handleClick}></img>)

 

}
export default Button