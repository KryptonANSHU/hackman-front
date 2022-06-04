import React,{useState} from 'react'
import { create } from 'ipfs-http-client'
const client = create('https://ipfs.infura.io:5001/api/v0')


const upload = () => {
  const [fileUrl, updateFileUrl] = useState(``)
  const [data,setData]=useState({
    ipfs:"",
    details:"",
    address:""
  })

  // async function onChange(e) {
  //   const file = e.target.files[0]
  //   try {
  //     const added = await client.add(file)
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
  //     updateFileUrl(url)
  //     // console.log('hi')
  //     // console.log(added.path)
  //   } catch (error) {
  //     console.log('Error uploading file: ', error)
  //   }  
  // }
  async function handleChange(){
    const {name,value,type, files}=event.target
    const url=""
    try {
          const added = await client.add(files[0])
          url = `https://ipfs.infura.io/ipfs/${added.path}`
        } catch (error) {
          console.log('Error uploading file: ', error)
        }  
    setData(prevData=>{
      return {
      ...prevData,
      [name]:type=="file"?url:value
      }
    })
    console.log(data)
  }

  return (
    <div>
    
<form action='/doctor'>
  <div class="form-group">
  <div className="App">
      <h1>Upload Prescription</h1>
      <input
        type="file"
        name="ipfs"
        onChange={handleChange}
      />
      {
        fileUrl && (
          <img src={fileUrl} width="100px"/>
        )
      }
    </div>

    <label for="exampleInputname1">Details</label>
    <input type="text" class="form-control" id="exampleInputname1" 
    aria-describedby="nameHelp" placeholder="Enter Name"
    value={data.details}
    onChange={handleChange}
    name="details"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputtype1">Public Address</label>
    <input type="text" class="form-control" id="exampleInputtype1" aria-describedby="nameHelp"
     placeholder="Enter type" 
     value={data.address}
     onChange={handleChange}
     name="address"
     />
  </div>
  

<br></br>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default upload