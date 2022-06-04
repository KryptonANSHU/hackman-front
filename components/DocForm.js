import React from 'react'
import { create } from 'ipfs-http-client'
import { useState } from 'react'
import Ipfsupload from './Ipfsupload'
<<<<<<< HEAD
=======
import {useQuery} from 'react-query'
>>>>>>> 0c937cf42f7ad537044476e24a96e6bf17a3b71f
const client = create('https://ipfs.infura.io:5001/api/v0')

export const DocForm = () => {
  
  // useQuery('doctor-data', ()=>{

  // })

  const [user,setUser] = useState({ 
    name:"" , category: "" , address: "", url:""
  })
  let name,value;

  async function handleChange(e){
    const {files}=e.target
    const url=""
    try {
          const added = await client.add(files[0])
          url = await `https://ipfs.infura.io/ipfs/${added.path}`
          console.log(url)
          // setUser({...user,[name]:value});
          // console.log(user)
          // setUrl(url)
        } catch (error) {
          console.log('Error uploading file: ', error)
        }  
  }

  function handleInputs(e){
<<<<<<< HEAD
    
    name=e.target.value;    
=======
    e.preventDefault();
      console.log(e);
    name=e.target.name;    
>>>>>>> 0c937cf42f7ad537044476e24a96e6bf17a3b71f
    value=e.target.value;

    setUser({...user,[name]:value});
    console.log(user)
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

  <div className="form-group">
      <h1>Upload your certificate</h1>
      <input
        type="file"
        name="ipfs"
        onChange={handleChange}
      />
      {/* {
        data.ipfs && (
          <img src={data.ipfs} width="100px"/>
        )
      } */}
    </div>
{/*   
  <label class="form-label" for="photo">Upload Photo</label>
<input type="file" class="form-control" id="photo" /> */}

<br></br>

  <button type="submit">Submit</button>
</form>
</>

  )
}
