import { useState } from "react"

/**
 * @param {Object} props
 * @param {Number} props.id
 * @param {String} props.thumbnail
 * @param {String} props.title
 * @param {String} props.description
 * @returns {JSX.Element}
 * @constructor
 */

export default function CardComponent(props){
    let{
        id,
        title,
        thumbnail,
        description
    } = props
    console.log('props from card', props )
   const [loading, setLoading] = useState(false)
    function addTocart(){
    //call service API
    setLoading(true)
    setTimeout(()=>{
        setLoading(false);
    },2000)
    clearTimeout();
   }
    return(
        <section className={
            ' w-40 bg-yellow-600 h-[100px] rounded-xl app-card flex flex-col'
            // 'w-auto min-w-[200px] bg-white rounded-xl app-card'
        }
     >
            <div className={'app-card-img w-full'}  >
                <img
                src={thumbnail}
                alt="thumbnail-card"
                className={'card-img__images w-20 object-contain'}
                />
            </div>
            {props?.children}
            <div className={'p-4 w-full'}>
                <h3 className="text-black">{title}</h3>
                <p className="text-black">{description}</p>
                <div>
                    <button onClick={addTocart} className="text-black">
                        {loading ? "Loading":"Add to cart"}
                        </button>
                </div>
            </div>
        </section>
    )
}
