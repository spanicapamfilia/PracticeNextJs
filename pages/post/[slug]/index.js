import axios from "axios";

export default function Multi(){
    return(
        <div>
            <h1>Multi</h1>
        </div>
    )
}

export async function getStaticPaths(){

    let paths =[];
    await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    )
    .then((response)=>{
        paths = response.data
    })

    if(Array.isArray(paths) && paths.length > 0){
        paths = paths.map((item)=> ({
            params: {id : '${item?.id}'}
        }))
    }
    return{
        paths: paths?? [],
        fallback:false
    }
}

export async function getStaticProps(){
    let{} = context.params;
    let data = null;

    await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
    )
    .then((response)=>{
        if(
            typeof(response?.data) !== 'undefined' &&
            typeof(response?.data) === "object" &&
            Object.keys(response?.data).length > 0
        ){
            data = response?.data
        }
    })
    
    return{
        props: {
            data:[]
        }
    }
}