import React,{useState} from 'react'
import { create } from 'ipfs-http-client'
import Hackman from './Hackman.json'
import {ethers} from 'ethers'
const client = create('https://ipfs.infura.io:5001/api/v0')



const upload = () => {
  const [fileUrl, updateFileUrl] = useState(``)
  const [user,setUser] = useState({ 
    details:"" , publicaddress: ""
  })

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
      console.log('hi')
      console.log(added.path)
    } catch (error) {   
      console.log('Error uploading file: ', error)
    }  
  }



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
       
    e.preventDefault();
      console.log(e);
    name=e.target.name;    
    value=e.target.value;

    setUser({...user,[name]:value});
    console.log(user)
  }
  

 

  return (
<>
<h1 style={{ color: 'white', textAlign: 'center' }}>Doctor </h1>


<form action='/doctor'>


<input type="file"  onChange={onChange}/>
    
    <input type='hidden' name='hidden2' value={fileUrl} />
    
  <div className="form-group">
    <label htmlFor="exampleInputname1">Details</label>
    <input type="text" className="form-control"  name="details" placeholder="Enter Name" 
      value={user.details}
      onChange={handleInputs}
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputtype1">Public Address</label>
    <input type="text" className="form-control"  name='publicaddress' placeholder="Enter Address of Patient" 
      value={user.publicaddress}
      onChange = {handleInputs}
    />
    </div>



<br></br>

  <button type="submit">Submit</button>
</form>
</>
  )
}

export default upload