import axios from "axios"

export default function Multi(props){
    let { data = {}, id } = props
    return(
        <div>
            <h1>PRODUCT {id}</h1>
            <pre>
                {
                    typeof(data) !== 'undefined' &&
                    typeof(data) === 'object' &&
                    Object.keys(data).length > 0 &&
                    Object.entries(data)
                    .map(([key, value]) => {
                        return(
                            <div>
                                <span>{key}</span>
                                <span> - </span>
                                <span>{value}</span>
                            </div>
                        )
                    })
                }
            </pre>
        </div>
    )
}

export async function getStaticPaths(){
    let paths = []

    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        console.log(res)
        paths = res.data
    })
    
    if(Array.isArray(paths) && paths.length > 0){
        paths = paths.map((item) => ({
            params: { id: `${item?.id ?? null}` }
        }))
    }

    return {
        paths: paths ?? [],
        fallback: false
    }
}

export async function getStaticProps(context){
    let { id } = context.params
    let data = null

    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => {
        if(
            typeof(res?.data) !== 'undefined' &&
            typeof(res?.data) === 'object' &&
            Object.keys(res?.data).length > 0
        ){
            data = res?.data
        }
    })
    .catch((err) => {
        data = []
    })
    console.log('data', data)
    return {
        props: {
            data: data,
            id: id
        }
    }
}