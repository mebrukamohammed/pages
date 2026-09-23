import { useContext } from "react"
import {userContext} from './Homeee.jsx'

function Home4(){
    const user=useContext(userContext)
 
return(<div className="BOX">
    <h1> Home 4</h1>
    <h2>{` bye ${user}`} </h2>
    

</div>)
}
export default Home4