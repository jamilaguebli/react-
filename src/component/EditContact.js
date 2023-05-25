import React from 'react'
import  { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { Link , useParams } from 'react-router-dom'
import {updateEtudiant} from '../redux/action/index'

function EditContact() {
    const {id} = useParams();
    const contacts= useSelector(state=>state);
    const currentContact = contacts.find(
      (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }, [currentContact]);
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const handleModifier = () => {
      dispatch(updateEtudiant({ id:parseInt(id),  name:name, email:email, number:number }))
      return alert ("modifier avec sucesss");
    }
  return (
    
      <div style={{textAlign:"center"}}>
        
     
      <h1 className="text-center text-dark py-3 display-2">EDIT STUDIANT {id}</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
        <form >
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
            <div >
              <input
                
                type="number"
                placeholder="number"
                value={number} onChange={e => setNumber(e.target.value)  }
                style={{height: "2.5em" ,verticalAlign: "middle" ,
                padding : "0 10px", margin  : "0", width   : "240px", background: "none"}}
              />
            </div>
            <br></br>
            <div className="form-group">
            <Link to={"/"}   className="btn  btn-dark">
                <button onClick={()=>handleModifier()}  style={{backgroundColor:"#df9dc4",color:"white" ,border:"none",textAlign: "center",
                      
                      fontSize:" 15px", padding: "10px",borderRadius: "10px",
                      width: "100px",marginRight:"10px"}}>
                  update
                </button>
                </Link>
                
              
              
                
             
             
              <Link to={"/"}   className="btn  btn-dark">
              <button style={{backgroundColor:"#df9dc4",color:"white" ,border:"none",textAlign: "center",
                      
                      fontSize:" 15px", padding: "10px",borderRadius: "10px",
                      width: "100px",}}>cancel</button>
                
               
              </Link>
                 </div>
                 
            
          </form>
        </div>
      </div>
    
  
    </div>
    
  )
}

export default EditContact
