import React from 'react'

export const DocForm = () => {
  return (
<>

<form action='/doctor'>
  <div class="form-group">
    <label for="exampleInputname1">Name</label>
    <input type="text" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputtype1">Type</label>
    <input type="text" class="form-control" id="exampleInputtype1" aria-describedby="nameHelp" placeholder="Enter type" />
  </div>

  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>

  
  
  <label class="form-label" for="certificate">Upload Your Certificate</label>
<input type="file" class="form-control" id="certificate" />
  
  <label class="form-label" for="photo">Upload Photo</label>
<input type="file" class="form-control" id="photo" />
<br></br>

  <button type="submit">Submit</button>
</form>
</>

  )
}
