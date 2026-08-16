import axios from "axios";
import { useState, useEffect } from "react";


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif= (tag)=>{
   
    const [loading, setloading] = useState(false);
    const [gif, setgif] = useState("");

    
    async function gifhandler() {
        setloading(true)
        let output = await axios.get(tag? `${url}&tag=${tag}`: url);
        const imgurl = output.data.data.images.original.url;
        setgif(imgurl);
        setloading(false);
    }

    useEffect(()=>{
        gifhandler(tag);
    }, [])

    return{loading, gifhandler, gif};

}

export default useGif;