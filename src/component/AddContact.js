

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ajouterEtudiant} from '../redux/action/index'
import { Link} from 'react-router-dom';



function AddContact() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [number,setNumber]=useState("");
  const contacts=useSelector((state) =>state);
  const dispatch = useDispatch();

  const handleSubmit =(e)=>{
    e.preventDefault();
   /* const checkEmail = contacts.find(contact =>contact.email===email&&email);
    const checkNumber = contacts.find(contact =>contact.number===parseInt(number));*/
    if (!name || !email || !number){
      return alert("please fill in all fields")
    }
    /*if (checkEmail){
      return alert("this email aleardy exixts");
    }
    if (checkNumber){
      return alert("this number aleardy exixts");
    }*/
 
  };
    
   
  const handleEnregistrer  = () => {
      dispatch(ajouterEtudiant({  name:name, email:email,number:number }))
      return alert("sucess")
  }
      
     

     
    
  
  
  return (
    <div style={{textAlign:"center"}}>
         <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Etudiant</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
        <form onSubmit={handleSubmit} >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name} onChange={e => setName(e.target.value)}
                style={{height: "2.5em" ,verticalAlign: "middle" ,
                padding : "0 10px", margin  : "0", width   : "240px", background: "none"}}
               
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email} onChange={e => setEmail(e.target.value)}
                style={{height: "2.5em" ,verticalAlign: "middle" ,
                padding : "0 10px", margin  : "0", width   : "240px", background: "none"}}
              />
            </div>
            <br></br>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={number} onChange={e => setNumber(e.target.value)}
                style={{height: "2.5em" ,verticalAlign: "middle" ,
                padding : "0 10px", margin  : "0", width   : "240px", background: "none"}}
              />
            </div>
            <br></br>
            <div className="form-group">
             <Link to={"/"} ><input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Student" 
                onClick={()=>handleEnregistrer()}
                style={{backgroundColor:"#df9dc4",color:"white" ,border:"none",textAlign: "center",
                      
                fontSize:" 15px", padding: "10px",borderRadius: "10px",
                width: "150px",}}
              /></Link>

            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddContact

