import { useState } from "react"
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

function Random() {

    const{gif, loading, gifhandler} = useGif();

    return (
        <div className="bg-green-500 w-9/12 flex flex-col items-center p-3">
            <h1 className="text-2xl font-bold text-black mb-2 underline uppercase">A random GIFS</h1>
            
            {
                loading? <Spinner/> :  <img src={gif} alt="" />
            }

            <img src="loading? setloading(false) : {gif} " alt="" />
            <button onClick={gifhandler} className="mt-3 bg-amber-300  text-black w-9/12 rounded-md p-2 font-medium text-xl border border-black ">
                Generate
            </button>
        </div>
    )
}

export default Random;