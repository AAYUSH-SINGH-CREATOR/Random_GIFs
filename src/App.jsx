import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App(){

  return(
    <div className="min-h-screen bg-blue-400 text-white flex items-center flex-col gap-15">
         <h1 className="w-11/12 bg-amber-100 text-black text-center text-3xl font-bold rounded-md p-2 mt-5">Random GIFS</h1>
         <Random />
         <Tag/>
    </div>
  )
}