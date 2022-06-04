import React from 'react'
import { useState } from 'react'
import Ipfsupload from './Ipfsupload'

export const DocForm = () => {
  
  const [user,setUser] = useState({ 
    name:"" , category: "" , address: ""
  })
  let name,value;

  function handleInputs(e){
      console.log(e);
    name=e.target.name;    
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  return (
<>
<h1 style={{ color: 'white', textAlign: 'center' }}>Doctor </h1>


<form action='/doctor'>
  <div className="form-group">
    <label htmlFor="exampleInputname1">Name</label>
    <input type="text" className="form-control" id="exampleInputname1" name="name" placeholder="Enter Name" 
      value={user.name}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputtype1">Category</label>
    <input type="text" className="form-control" id="exampleInputtype1" name='category' placeholder="Enter Category" 
      value={user.category}
      onChange = {handleInputs}
    />

  </div>

  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" name='address' placeholder="1234 Main St"
    value={user.address}
    onChange={handleInputs }
     />
  </div>

  <Ipfsupload
    title = "Upload Certificate"
   />
{/*   
  <label class="form-label" for="photo">Upload Photo</label>
<input type="file" class="form-control" id="photo" /> */}

<br></br>

  <button type="submit">Submit</button>
</form>
</>

  )
}
