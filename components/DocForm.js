import React from 'react'
import { create } from 'ipfs-http-client'
import { useState } from 'react'
// import Ipfsupload from './Ipfsupload'
import {useQuery} from 'react-query'



const client = create('https://ipfs.infura.io:5001/api/v0')


export const DocForm = () => {
  
  // useQuery('doctor-data', ()=>{

  // })
  
  const [fileUrl, updateFileUrl] = useState(``)
  const [user,setUser] = useState({ 
    name:"" , category: "" , address: "", url:""
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
    onChange={handleInputs}
     />
  </div>


  {/* <Ipfsupload
    title = "Upload Certificate" 
    name ='ipfslink'
    value ={user.ipfslink}
   /> */}

   <input type="file"  onChange={onChange}/>
    
    <input type='hidden' name='hidden' value={fileUrl} />

<br></br>

  <button type="submit">Submit</button>
</form>
</>

  )
}
