import React, { useState } from 'react'

const EasyTask = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  
  const fetchData = async()=>{
    setLoading(true)
    setError(null)

   try{
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc")
    if(!response.ok){
      throw new Error("failed to fetch")
    }
    const data = await response.json();
    setData(data)
   }
   catch(err){
    setError(err.message)
   }
   finally{
    setLoading(false)
   }

  }

  return (
    <div className="p-4">
      <h1>TASK 1 : EASY</h1>
      <button onClick={fetchData} className='mb-4 px-4 py-2 bg-green-500 text-white rounded'>FetchData</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && data.length===0 && <p>No Data Available</p>}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
      {data.map((e) => (
          <div key={e.id} className="border rounded-lg overflow-hidden">
            <img src={e.url} alt={e.id} className="w-full h-48 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EasyTask