function UserGreeting(props){
       return (props.isLoggedIn ? <h2 className="logged-in">welcome{props.name}</h2> :
                           <h2 className="not-logged-in">please login first</h2>)
        
       
    

}
export default UserGreeting