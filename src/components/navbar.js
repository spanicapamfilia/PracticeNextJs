/**
 * @param {Object} props
 * @param {(String|null)} props.logo
 */
import Link from "next/link"
export default function Navbar(props){
    let{logo} = props
    return(
        <header
            className={
                'w-full fixed top-2 h-20 bg-white-500'
            }

            >
            <div className="mx-auto max-w-[1280]">
                <div>
                    {
                        logo !== null &&
                        <img 
                        src={logo}
                        alt="logo-page"
                        className={'w-20 object-contain'}
                        />
                    }
                    <nav>
                        <ul className={'flex items-center gap-4'} >
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                                <Link href="/"> about</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}