import axios from "axios"
import { useEffect, useState } from "react"

const Characters = () => {

    const[data, setData] = useState([])
  
useEffect(() =>{
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((resp) =>{
      setData(resp.data.results)
    }) 
  .catch((err) => console.log(err))
},[])

console.log(data)
  
  return (
  <div className="flex justify-center mt-5">
    <div className="grid grid-cols-4 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
            data.map((Characters) =>(
                <div className="rounded-md bg-blue-400 w-60 text-black hover:bg-blue-500 cursor-pointer" key={Characters}>
                <h2 className="p-5 flex items-center justify-center text-2xl" >{Characters.name}</h2>
                <img width={290} src={Characters.image} alt=""/>
                <div>
                    <p className="text-green-400 text-center">Estado -- {Characters.status}</p>
                    <p>
                        <b>Location: {Characters.location?.name}</b>
                    </p>
                    <p>
                        <b>Space: {Characters.species}</b>
                    </p>
                    <p>
                        <b>Episodios: {Characters.episode?.length}</b>
                    </p>
                </div>
                
                    
                </div>
            ))
        }
    </div>
  </div>
  )
}
export default Characters
