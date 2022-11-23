import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'
import { useEffect, useState } from 'react'


function App() {
  
const [data, setData] = useState([])

//console.log(data)

useEffect(()=>{
  async function getAllData() {
    const response = await fetch('http://localhost:3000/users', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
    //console.log(data)
  }
 // console.log(data)
  getAllData()
},[])

useEffect(()=>{
  console.log(data)
  
},[data])

return (
    <div className="App">
      <Header logo={logo}/>
      <Display data = {data} />
    </div>
  );
}

export default App;
