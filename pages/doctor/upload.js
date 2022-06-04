import React,{useState} from 'react'
import { create } from 'ipfs-http-client'
import Hackman from './Hackman.json'
import {ethers} from 'ethers'
const client = create('https://ipfs.infura.io:5001/api/v0')



const upload = () => {
  // const [fileUrl, updateFileUrl] = useState(``)
  const [url,setUrl] = useState(``)
  const [data,setData]=useState({
    ipfs:"",
    details:"",
    address:""
  })
  const contractAddress="0x60CCDAf459252a1930D7AbA7497Eea0CdC39b164"

  

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
  function handleChangeDet(e) {
    setData.details(e.target.value)
  }

  function handleChangeAdd(e) {
    console.log('title', e.target.value)
    setData.address(e.target.value)
  }
  async function handleChange(e){
    // const {name,value,type, files}=event.target
    const files = e.target.files[0]
    console.log("heyy", files)
    try {
          const added = await client.add(files)
          const temp = await `https://ipfs.infura.io/ipfs/${added.path}`
          console.log("temp", temp)
          setUrl(temp)
          // setData(data => ({
          //   ...data,
          //   [data.ipfs]:url
          // }))
          console.log("url: ", url)
          // console.log("ipfs", data.ipfs)
        } catch (error) {
          console.log('Error uploading file: ', error)
        }  
    // setData(prevData=>{
    //   return {
    //   ...prevData,
    //   [name]:type==="file"?url:value
    //   }
    // })
    // console.log(data)
  }

  function handleSubmit(){
    e.preventDefault()
  }

  const castSignature = async () => {
    const { ethereum } = window
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const prescripContract = provider.getSigner()
      const contract = new ethers.Contract(
        contractAddress,
        Hackman.abi,
        prescripContract
      )
      const data = contract.upload(data.ipfs, data.details)
      await data
      data.then((value) => {
        console.log("Transaction hash is "+value.hash)
        setTxHash(value.hash)
        setGotTxn(true);
      })
    }
  }
  return (
    <div>
    
  <div className="form-group">
  <div className="App">
      <h1>Upload Prescription</h1>
      <input
        type="file"
        name="ipfs"
        onChange={handleChange}
      />
      {
        data.ipfs && (
          <img src={data.ipfs} width="100px"/>
        )
      }
    </div>

    <label for="exampleInputname1">Details</label>
    <input type="text" class="form-control" id="exampleInputname1" 
    aria-describedby="nameHelp" placeholder="Enter Name"
    value={data.details}
    onChange={handleChangeDet}
    name="details"
    />
  </div>
  <div class="form-group">
    <label for="exampleInputtype1">Public Address</label>
    <input type="text" class="form-control" id="exampleInputtype1" aria-describedby="nameHelp"
     placeholder="Enter type" 
     value={data.address}
     onChange={handleChangeAdd}
     name="address"
     />
  </div>
  

<br></br>

  <button onClick={castSignature} class="btn btn-primary">Submit</button>

    </div>
  )
}

export default upload