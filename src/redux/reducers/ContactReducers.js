const initialState=[
{
    id:0, name:"jamila",number:123456,email:"jamila@gamil.com",
},
{
    id:1,
     name:"sondes",
     number:15896,
     email:"sondes@gamil.com"
},
{  
    id:3, name:"sofien",number:178899,email:"sofien@gamil.com"
},
    

];

const ContactReducers =(state=initialState,action)=>{
   switch(action.type){
    case 'AJOUTER_ETUDIANT':
        return [...state, action.payload];
        case "UPDATE_ETUDIANT":
        const updateState=state.map(contact=>contact.id===action.payload.id?action.payload:contact);
        state=updateState;
        return state;

       
       case "RESET_CONTACT":
        const filterCotact=state.filter(contact=>contact.id !==action.payload && contact);
         state=filterCotact;
      return state;
           
    default:return state;
   }
};
export default ContactReducers;