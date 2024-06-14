import { useEffect, useState } from 'react'


export function useFetch(fetchFunc,initialValue){
    const [isloading,setIsLoading] = useState()
    const [fetchData,setFetchData] = useState(initialValue)
    const[error,setError] = useState()

    useEffect(() => {
        async function fetchData(){
          setIsLoading(true)
          try {
            const data =await fetchFunc()
            setFetchData(data)
          } catch (error) {
            setError({message:error.message||"failed to fetch data"})
          }
          setIsLoading(false)
        }
      fetchData()
      }, [fetchFunc])

      return {isloading,fetchData,setFetchData,error}
}


export default useFetch