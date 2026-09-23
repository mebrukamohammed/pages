import { useState,useContext, createContext } from "react"
import Home2 from './Home2.jsx'
 export const userContext=createContext();
function Homeee(){
    const [user ,setUser]=useState("mebruka")
return(<div className="BOX">
    <h1> Home 1</h1>
    <h2>hello{user}</h2>
    <userContext.Provider value={user}><Home2 user={user}/></userContext.Provider>

    

</div>)
}
export default Homeee