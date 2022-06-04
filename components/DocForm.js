import React from 'react'
import Ipfsupload from './Ipfsupload'

export const DocForm = () => {
  
  return (
<>

<form action='/doctor'>
  <div className="form-group">
    <label htmlFor="exampleInputname1">Name</label>
    <input type="text" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter Name" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputtype1">Type</label>
    <input type="text" className="form-control" id="exampleInputtype1" aria-describedby="nameHelp" placeholder="Enter type" />
  </div>

  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
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
