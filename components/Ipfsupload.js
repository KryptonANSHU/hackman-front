import { useState } from 'react'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')

function Ipfsupload(props) {
  const [fileUrl, updateFileUrl] = useState(``)

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
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <input type="file" onChange={onChange} />

      {
        fileUrl && (
          <img src={fileUrl} width="600px"/>
        )
      }
      
    </div>
  );
}

export default Ipfsupload