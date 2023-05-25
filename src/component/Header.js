import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {deleteEtudiant} from '../redux/action/index'
function Header() {
  const contacts=useSelector(state=>state);
  const dispatch=useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteEtudiant(id))
  }
  return (
    <div style={{textAlign:"center"}}>
      <div >
      <div >
        <Link to="/add"  ><button style={{backgroundColor:"#459eb7",color:"white" ,border:"none",borderRadius: "10px",textAlign: "center",
        fontSize:" 15px", padding: "10px",
        width: "150px",}}> Add Contact</button>
         
        </Link>
       </div>
       <br>
       </br>
       <br></br>
       <div style={{textAlign:"center"}}>    
       <table style={{ borderCollapse: "collapse"}} >
            <thead >
              <tr>
                <th style={{border: "1px solid black",padding: "10px" ,}}>Id</th>
                <th style={{border: "1px solid black",padding: "10px"}}>Name</th>
                <th style={{border: "1px solid black",padding: "10px"}}>Email</th>
                <th style={{border: "1px solid black",padding: "10px"}}>Number</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
            {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td style={{border: "1px solid black",padding: "10px"}}>{id + 1}</td>
                    <td style={{border: "1px solid black",padding: "10px"}}>{contact.name}</td>
                    <td style={{border: "1px solid black",padding: "10px"}}>{contact.email}</td>
                    <td style={{border: "1px solid black",padding: "10px"}}>{contact.number}</td>
                    <td style= {{border: "1px solid black",padding: "10px"}}>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        <button style={{backgroundColor:"#459eb7",color:"white" ,border:"none",textAlign: "center",
                      
        fontSize:" 15px", padding: "7px",borderRadius: "10px",
        width: "60px",}}> Edit</button>
                       
                      </Link>
                      
                      
                      <button
                        
                        onClick={()=>handleDelete(contact.id)}  style={{backgroundColor:"#459eb7",color:"white" ,border:"none",borderRadius: "10px",textAlign: "center",
                        fontSize:" 15px", padding: "5px",
                        width: "80px" ,marginRight:"10px"}}       >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
      </tbody> 
      </table>          
       </div>  
       </div>         
    </div>
  )
}

export default Header
