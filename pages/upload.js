import React from 'react'

const upload = () => {
  return (
    <div>
    
<form action='/doctor'>
  <div class="form-group">
  
  <label class="form-label" for="prescription">Upload Prescription</label>
<input type="file" class="form-control" id="prescription"/>

    <label for="exampleInputname1">Disease</label>
    <input type="text" class="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputtype1">Details</label>
    <input type="text" class="form-control" id="exampleInputtype1" aria-describedby="nameHelp" placeholder="Enter type" />
  </div>
  

<br></br>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default upload