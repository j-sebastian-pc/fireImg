import { useState } from 'react'
import {uploadFile} from './Firebase/config'


function App() {
const [file, setFile] =  useState(null)
const handleSudmit = async (e)=>{
  e.preventDefault();
  try {
    const result = await uploadFile(file);
    console.log(result);
  } catch (error) {
    console.error(error);
    alert('fallo al subir, intente mas tarde')
  }
  
}
  return(
    <form onSubmit={handleSudmit}>
      <input type="file" name="" id="" onChange={e =>setFile(e.target.files[0])} />
      <button>
        Upload
      </button>
    </form>
  )
} 
export default App