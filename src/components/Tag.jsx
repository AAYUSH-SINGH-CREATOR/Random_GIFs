import axios from "axios";
import { useState } from "react"
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";

export default function Tag() {

    const [tag, settag] = useState("car");
    const { loading, gif, gifhandler } = useGif(tag);


    return (
        <div className="flex flex-col bg-pink-500 w-9/12 items-center p-3 mb-10">
            <h1 className="text-2xl text-center font-bold text-black mb-2 underline uppercase">Random {tag} gifs</h1>
          <div className=" min-h-50 flex justify-center items-center"> 
             {
                loading ? <Spinner /> : <img src={gif} alt="" />
            }
            </div>
            <input type="text" placeholder="Enter tag" className="bg-white text-black mt-3 rounded-md p-1 w-9/12" value={tag} onChange={(e) => settag(e.target.value)} />
            <button onClick={gifhandler} className=" bg-amber-300  text-black w-9/12 rounded-md p-2 font-medium text-xl border border-black border-t-transparent">Generate</button>
        </div>
    )
}
