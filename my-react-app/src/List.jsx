function List({vitamins=[]}){


  return(
     /*<>
    <h2 className="desserts">Desserts</h2>
    <ol>
      {props.items.map(sweet => <li  key={sweet.id}>
    {sweet.name}:&nbsp;<b>{sweet.recepe}</b></li>)}
      </ol>
      <h2 className="fruits">Fruits</h2>
  <ol>
    {props.vitamins.map(fruit=><li key={fruit.id}>
    {fruit.name}:&nbsp;<b>{fruit.cal}</b></li>)}
  </ol>
  <>
  <h2>{props.category1}</h2>
  <ol>
  {props.vitamins.filter(fruit=> fruit.cal>100)
    .map(fruit=> <li key={fruit.id}>
    {fruit.name}:{fruit.cal}</li>)}
    </ol>
    <h2>{props.category2}</h2>
    <ol>
  {props.vitamins.filter(fruit=> fruit.cal<100)
    .map(fruit=> <li key={fruit.id}>
    {fruit.name}:{fruit.cal}</li>)}
    </ol>


   
    </>*/
  /*  <>
<ol>

  {props.vitamins.map(fruit=> <li key={fruit.id}>
    {fruit.name}:{""}
    {fruit.cal>100 ? "HighCalorie" :" Good choice"}
    
  </li>)}
  </ol>
  
  <ol>
   {props.sweets.filter(sweet=>sweet.recepe=="Italian")
                 .map(sweet =><li key={sweet.id}>{sweet.name}:{sweet.recepe}</li>)}
  </ol>*/
  vitamins.map(fruit=> <li key={fruit.id} className="food-list">
   <div> {fruit.name}</div> 
   <div>{fruit.cal} Calories</div>
     <div>{fruit.cal>100? "High Calorie" :"Low calorie"}</div>
    
  </li>)

  
  


    )
    


}
export default List