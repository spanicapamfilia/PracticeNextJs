import { useState, useEffect } from "react";
import axios from "axios";

//CSR(Client Side Rendering)
export default function CSR(){
    
    const [data,setData] = useState([]);
    const [loading,setLoading]= useState(false);
    const[params, setParams] = useState({
    page:1,
    limit:10
    });

    useEffect(()=>{
        setLoading(true);
        setData([])
 //       timeout = setTimeout(()=>{
        axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    ...params,
                }
            }
        )
        .then((response)=>{
            setData(response.data);
            setLoading(false);
        })
        .catch((err)=>{
            setData([]);
            setLoading(false);
        })
    // }, timeout[]);
    }, [params]);

    return(
        <div className="w-full">
        <h1> Client Side Rendering</h1>
        <button onClick={()=>
        setParams({
            ...params,
            page:params.page + 1
        })   
    }>change page</button>
        <div className="space-y-6 block">
        {
                    loading === true ? "LOADING" : "SELESAI"
                }
                <pre>
                    {
                    JSON.stringify(data, null, 2)
                    }
                </pre>
        </div>
    </div>
    )
}