import {useState} from 'react'
function StudentForm(){
    const [student,setStudent]=useState({
        name:"",
        gender:"",
        department:"",
        studyMode:""
    })
   
    
    return(
           <div className="student">
            <label>Enter Student Name</label>
            <input value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}></input>
            <label>gender</label>
           <input type="radio" value={student.gender} checked={student.gender==="female"} onChange={(e)=>setStudent({...student,gender:e.target.value})}></input>
            <input type="radio" value={student.gender} checked={student.gender==="male"} onChange={(e)=>setStudent({...student,gender:e.target.value})}></input>
             male
             <select value={student.department} onChange={(e)=>setStudent({...student,department:e.target.value})}>
                <option value="Natural SCiences">Natural Sciences</option>
              <option value="Computational Fields">Computational Fileds</option>
             <option value="Health Science">Health Sciences</option>
            <option value="Social Science">Social Sciences</option>
             </select>
            <label>
            <input type="radio" value={student.studyMode} checked={student.studyMode=="On Campus"} onChange={(e)=>setStudent({...student,studyMode:e.target.value})}></input>
             On Campus</label>
              <label>
            <input type="radio" value={student.studyMode} checked={student.studyMode=="Online"} onChange={(e)=>setStudent({...student,studyMode:e.target.value})}></input>
             Online</label>

               <p>Name:{student.name}</p>
               <p> Gender:{student.gender}</p>
               <p> Department:{student.department}</p>
               <p> Study Mode:{student.studyMode}</p>

              </div>
              
    )

}
export default StudentForm
