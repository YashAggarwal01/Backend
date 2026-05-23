import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])
  useEffect(()=>{
    axios.get('api/jokes')
    .then((response)=>{
      setJokes(response.data)
    
    })
    .catch((error) => {
      <h1 className="text-gray-900">{console.log(error)}</h1>
    })
  })


  return (
    <div className='bg-gray-600'>
      
      <h1 className='bg-black text-white text-center'>FIrst Full Satck Application</h1>
      <br className='bg-white'></br>
      <p className="bg-black text-white text-center">JOKES:{jokes.length}</p>
      {
        jokes.map((jokes,index) =>(
          <div key={jokes.id}>
            <h3 className='bg-black text-white text-center'>{jokes.id}.{jokes.title}</h3>
            <br className='bg-white'></br>
            <p className='bg-black text-white text-center'>{jokes.content}</p>
            <br className='bg-white'></br>
          </div>
        ))
      }
      <h1 className='text-red-800 text-xl text-center'>This is Youtube</h1>
    </div>
  )
}

export default App
