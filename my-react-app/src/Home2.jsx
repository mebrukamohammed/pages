import { useState,useContext } from "react"
import Home3 from './Home3.jsx'
import { userContext } from "./Homeee.jsx"

function Home2(){
    const user=useContext(userContext)
   
return(<div className="BOX">
    <h1>Home 2</h1>
    <h2>{` ${user} you are now inside home two `}</h2>
    <Home3/>
    

</div>)
}
export default Home2