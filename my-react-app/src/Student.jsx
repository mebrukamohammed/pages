//import propTypes from 'prop-types'




function Student(props){
    return(
       
        <div className="student">
            <p>name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Is Enrolled:{props.isEnrolled?"yes":"no"}</p>
        </div>
       

    )

}
Student.defaultProps={
    name:"mebu",
    age:0,
    isEnrolled:false


}
/*Student.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    isEnrolled:propTypes.bool
}*/
export default Student