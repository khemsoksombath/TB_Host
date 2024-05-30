import { useContext } from "react"
import { SharedText } from "./SharedText"
import img from "../assets/image.png"

export default function Nav(){
    const {fullscreen,setFullScreen} = useContext(SharedText)

    const handleFS = ()=>{
        setFullScreen(true)
        console.log("handle Full Screen" + fullscreen);
    }

    return(
        <div class="m-3  rounded-md bg-[#71A8FB] " >
        <div class="Nav flex-grow flex justify-between items-center pl-8 pr-8 pt-2 pb-2 md:pl-4 md:pr-4 ">   
            <img class="w-[60px] h-[45px]  rounded-sm" src={img}/>  
            <div  class="about md:gap-8 md:flex hidden">
                <a  href="" class="Home no-underline hover:text-white text-inherit">HOME</a>
                <a  href="" class="about no-underline hover:text-white text-inherit">ABOUT US</a>
                <a  href="" class="contact no-underline hover:text-white text-inherit">CONTACTS</a>
            </div>
            <div class="responsive md:hidden flex gap-3">
                <button class="btn btn-primary full md:hidden flex justify-center items-center"><svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path></svg> </button>
                <div class="aboutRes md:hidden ">
                    <button class="relative btn btn-light menuRes flex justify-center items-center"><svg class="w-5 text-" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></button>
                </div>
            </div>
            <div class="md:block hidden">
                <button onClick={handleFS} class="full ">
                <svg className="w-7 text-white shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 3V5H4V9H2V3H8ZM2 21V15H4V19H8V21H2ZM22 21H16V19H20V15H22V21ZM22 9H20V5H16V3H22V9Z"></path></svg>
                </button>
            </div>
        </div>
    </div>
    )
}
