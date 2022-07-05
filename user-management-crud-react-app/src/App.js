
import './App.css';
import React, { useState, useEffect } from "react";
import UserForm from './components/UserForm';

const URL = "https://rest-api-without-db.herokuapp.com/users";



function App() {

  const [users, setUsers]= useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setErrors]= useState(null);

  const getAllUsers=()=>{
    fetch(URL)
    .then((res)=>{
      if(!res.ok){
        throw Error("Could not fetch")
      }
      return res.json()
    })
  
    .then((data)=>{
      console.log(data.users)
      setUsers(data.users)
    })
  
    .catch((err)=>{
      setErrors(err.message)
  
    })
  
    .finally(()=>{
      setErrors(false);
    })
  }


  useEffect(() => {
    getAllUsers();
    
  }, [])

  //-----------Delete Method----------------
 const handleDelete=(id)=>{
  fetch(URL + `/${id}`, {
    method: 'DELETE'
  })
  .then((res)=>{
    if(!res.ok){
      throw Error("Could not delete")
    }
    getAllUsers();
   
  })

  .catch((err)=>{
    setErrors(err.message)

  });

};
 

  

  return (
    <div className="App">
      <h1>User Management App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}


      <UserForm btnText="Add user"/>

     <section>
     {users && users.map((user)=>{
        const {id, username, email}=user;
        return(
          <article key={id} className="card">
            <p>{username}</p>
            <p>{email}</p>
            <button className='btn'>Edit </button>
            <button className='btn'onClick={()=>{handleDelete(id)}}>Delete</button>
          </article>
        )
      })}
     
     </section>
    </div>
  );
}

export default App;
